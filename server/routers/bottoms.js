import express from "express";
import { addBottomsCategory, addBottomsColor, addBottomsSize, getBottomsCategory, getBottomsColor, getBottomsSize } from "../controllers/bottoms.js";


const router = express.Router();

router.post("/bottoms-category", addBottomsCategory);

router.post("/bottoms-color", addBottomsColor);

router.post("/bottoms-size", addBottomsSize);

router.get("/bottoms-category", getBottomsCategory);

router.get("/bottoms-color", getBottomsColor);

router.get("/bottoms-size", getBottomsSize);

export default router;