import express from "express";
import { addOutwearCategory, addOutwearColor, addOutwearSize, getOutwearCategory, getOutwearColor, getOutwearSize } from "../controllers/outwear.js";


const router = express.Router();

router.post("/outwear-category", addOutwearCategory);

router.post("/outwear-color", addOutwearColor);

router.post("/outwear-size", addOutwearSize);

router.get("/outwear-category", getOutwearCategory);

router.get("/outwear-color", getOutwearColor);

router.get("/outwear-size", getOutwearSize);

export default router;