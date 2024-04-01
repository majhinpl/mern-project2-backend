import { Request, Response } from "express";
import Product from "../database/models/ProductModel";

class productController {
  public static async createProduct(
    req: Request,
    res: Response
  ): Promise<void> {
    const { productName, decription, price, imgUrl } = req.body;

    if (!productName || !decription || !price || !imgUrl) {
      res.status(400).json({
        message: "Please fill the required filled",
      });
      return;
    }

    await Product.create({
      productName,
      decription,
      price,
      imgUrl,
    });
    res.status(200).json({
      message: "Product created successfully",
    });
  }
}

export default productController;
