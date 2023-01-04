import express from "express";
import { deleteProduct, productController } from "../controllers/productController.js";

const router = express.Router();

router.get("/getall", productController);
router.post("/deleteProduct", deleteProduct);

export default router;