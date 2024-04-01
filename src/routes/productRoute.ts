import express, { Router } from "express";
import productController from "../controllers/productController";
const router: Router = express.Router();

router.route("/create").post(productController.createProduct);

export default router;
