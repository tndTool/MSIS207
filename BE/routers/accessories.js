import express from "express";
import { addAccessoriesCategory, addAccessoriesColor, addAccessoriesSize, getAccessoriesCategory, getAccessoriesColor, getAccessoriesSize } from "../controllers/accessories.js";


const router = express.Router();

router.post("/accessories-category", addAccessoriesCategory);

router.post("/accessories-color", addAccessoriesColor);

router.post("/accessories-size", addAccessoriesSize);

router.get("/accessories-category", getAccessoriesCategory);

router.get("/accessories-color", getAccessoriesColor);

router.get("/accessories-size", getAccessoriesSize);

export default router;