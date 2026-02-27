import express from "express";
import cors from "cors";
import path from "path";
import internshipRoutes from "./routes/internshipRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/internship", internshipRoutes);

// Static Frontend Serving
const frontendDistPath = path.join(
  __dirname,
  "..",
  "..",
  "placement-hub",
  "dist",
);
app.use(express.static(frontendDistPath));

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
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
