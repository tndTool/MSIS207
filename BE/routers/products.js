import express from "express";
import { addProduct, deleteProduct, productController } from "../controllers/productController.js";

const router = express.Router();

router.get("/getall", productController);

router.post("/deleteProduct", deleteProduct);

router.post("/addProduct", addProduct);

export default router;