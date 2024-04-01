import express, { Application, Request, Response } from "express";
const app = express();
const PORT: number = 3000;

// dotnet  imports
import * as dotenv from "dotenv";
dotenv.config();

// Databse file imports
import "./database/connection";

app.use(express.json());

import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";

// routes imports
app.use("", userRoute);
app.use("", productRoute);

app.listen(PORT, () => {
  console.log("Server has started at port", PORT);
});
