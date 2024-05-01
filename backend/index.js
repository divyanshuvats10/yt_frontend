// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";

import loginRouter from "./routes/loginRoute.js";
import registerRouter from "./routes/registerRoute.js";

// Load environment variables from config file
dotenv.config({ path: "./config/config.env" });

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);

// Connect to MongoDB
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}`);
});
