import express, { Router } from "express";
import productController from "../controllers/productController";
import { upload } from "../middleware/multerConfig";
import errorHandler from "../services/catchAsyncError";
const router: Router = express.Router();

router.post(
  "/create",
  upload.single("image"),
  errorHandler(productController.createProduct)
);

export default router;
