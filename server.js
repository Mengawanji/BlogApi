import dotenv from "dotenv";
dotenv.config();

import app, { initializeApp } from "./src/app.js";
import logger from "./src/config/logger.js"; // ← this was missing

const PORT = process.env.PORT ?? 3000;
const NODE_ENV = process.env.NODE_ENV ?? "development";

await initializeApp();

app.listen(PORT, () => {
  logger.info(
    {
      port: PORT,
      env: NODE_ENV,
      health: `http://localhost:${PORT}/health`,
    },
    "Server started"
  );
});