import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { connectToDatabase } from "./database/databaseConnection.js";

import userRouter from "./route/user-route.js";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening at Port : ${PORT}`.bgCyan);
  connectToDatabase();
});
