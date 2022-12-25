import express from "express";
import { createBill } from "../controllers/bill.js";

const router = express.Router();

router.post("/checkout", createBill);


export default router;