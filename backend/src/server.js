import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gugusCheckerRoutes from "./routes/gugusChecker.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [CORS_ORIGIN, "http://localhost:5174"],
    credentials: true,
  })
);

// Logging middleware (dev only)
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
  });
}

// Routes
app.get("/api/v1/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running properly",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/gugus-checker", gugusCheckerRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`CORS enabled for: ${CORS_ORIGIN}`);
  console.log(`Endpoint: GET /api/v1/gugus-checker/:nrp`);
});
