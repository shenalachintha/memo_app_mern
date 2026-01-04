import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
import postRoutes from './routes/posts.js';

// Load environment variables (e.g., CONNECTION_URL)
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/memo";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
// Removed deprecated mongoose option `useFindAndModify` (no longer supported in Mongoose v6+)