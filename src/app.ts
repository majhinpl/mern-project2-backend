import express, { Application } from "express";
import * as dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import { upload } from "./middleware/multerConfig"; // Import only the upload instance

dotenv.config();

const app: Application = express();
const PORT: number = 3000;

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
