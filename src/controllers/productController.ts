import { Request, Response } from "express";
import Product from "../database/models/ProductModel";
import { upload } from "../middleware/multerConfig";

class ProductController {
  public static async createProduct(
    req: Request,
    res: Response
  ): Promise<void> {
    // Extract product data from request body
    const { productName, description, price } = req.body;

    // Check if all required fields are provided
    if (!productName || !description || !price || !req.file) {
      res.status(400).json({
        message: "Please fill all the required fields and upload an image",
      });
      return;
    }

    // Construct product object with file URL
    const productData = {
      productName,
      description,
      price,
      imgUrl: req.file.path, // Store the path of the uploaded file
    };

    try {
      // Create new product in the database
      await Product.create(productData);
      res.status(200).json({ message: "Product created successfully" });
    } catch (error: any) {
      // Define the type of the error object explicitly
      res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  }
}

export default ProductController;
