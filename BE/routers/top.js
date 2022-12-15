import express from "express";
import { addTopCategory, addTopColor, addTopSize, getTopCategory, getTopColor, getTopSize } from "../controllers/top.js";


const router = express.Router();

router.post("/top-category", addTopCategory);

router.post("/top-color", addTopColor);

router.post("/top-size", addTopSize);

router.get("/top-category", getTopCategory);

router.get("/top-color", getTopColor);

router.get("/top-size", getTopSize);

export default router;