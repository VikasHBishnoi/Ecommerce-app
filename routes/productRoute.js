import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// POST
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get Products
router.get("/get-product", getProductController);
// Single Products
router.get("/get-product/:slug", getSingleProductController);
// Get Photo
router.get("/product-photo/:pid", productPhotoController);
// delete product
router.delete(
  "/product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  deleteProductController
);

export default router;
