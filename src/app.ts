import express, { Application } from "express";

import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import "./database/connection";
import { upload } from "./middleware/multerConfig"; // Import only the upload instance

const app: Application = express();
const PORT: number = 3300;

// Middleware for parsing JSON body
app.use(express.json());

// Mounting multer middleware for file uploads
app.use(upload.single("image")); // Use the upload instance

// Routes
app.use("", userRoute);
app.use("", productRoute);

// Starting the server
app.listen(PORT, () => {
  console.log("Server has started at port", PORT);
});
