import express from "express";
import { addHomeSliderData, addPolicy, getHomeSliderData, getPolicy } from "../controllers/home.js";

const router = express.Router();


router.post("/policy", addPolicy);

router.get("/policy", getPolicy);

router.post("/homeSliderData", addHomeSliderData);

router.get("/homeSliderData", getHomeSliderData);

export default router;