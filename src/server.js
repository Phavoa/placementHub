import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";

const startServer = async () => {
  await connectDB();

  app.listen(env.port, "0.0.0.0", () => {
    console.log(`Server running on port ${env.port}`);
    console.log(`Local Access: http://localhost:${env.port}`);
    console.log(
      `Network Access: http://0.0.0.0:${env.port} (Use your computer's IP address)`,
    );
  });
};

startServer();
