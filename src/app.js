import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import internshipRoutes from "./routes/internshipRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../../placement-hub/dist");

console.log("[STARTUP] Frontend Dist Path:", frontendDistPath);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/internship", internshipRoutes);

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// Static Frontend Serving
app.use(express.static(frontendDistPath));

// Fallback Middleware for SPA support (Express 5 compatible)
// This catches all requests that didn't match any API routes or static files
app.use((req, res, next) => {
  // Only serve index.html for GET requests that accept HTML
  if (req.method === "GET" && req.accepts("html")) {
    res.sendFile(path.join(frontendDistPath, "index.html"), (err) => {
      if (err) {
        if (!res.headersSent) {
          res
            .status(500)
            .send(
              "Frontend assets not found. Ensure you have run 'npm run build' in the frontend folder.",
            );
        }
      }
    });
  } else {
    next();
  }
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
  });
});

export default app;
