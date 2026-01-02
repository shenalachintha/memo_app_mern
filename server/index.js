import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const app = express();
import postRoutes from './routes/posts.js';

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://user:20020209@memodb.pin3ew0.mongodb.net/?appName=MemoDb";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
// Removed deprecated mongoose option `useFindAndModify` (no longer supported in Mongoose v6+)