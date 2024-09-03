import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());
app.use(cors());
dotenv.config();

// Middleware to log incoming requests

// Routes
app.use("/api", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
