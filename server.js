import express from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//config env
dotenv.config();

//databae config
connectDB();

//middelware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8080;

//rest api
app.get("/", (req, res) => {
  res.send("E-Commerce");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
