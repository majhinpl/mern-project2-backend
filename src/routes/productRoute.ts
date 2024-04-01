import express, { Router } from "express";
import productController from "../controllers/productController";
import { upload } from "../middleware/multerConfig";
const router: Router = express.Router();

router.post("/create", upload.single("image"), productController.createProduct);

export default router;
