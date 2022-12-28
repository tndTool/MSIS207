import express from "express";
import { productController } from "../controllers/productController.js";

const router = express.Router();

router.get("/getall", productController);


export default router;