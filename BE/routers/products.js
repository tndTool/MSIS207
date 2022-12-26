import express from "express";
import { productController } from "../controllers/productController.js";

const router = express.Router();

router.get("/getalll", productController);


export default router;