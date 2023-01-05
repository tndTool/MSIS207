import express from "express";
import { addEmployee, getEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/addEmployee", addEmployee);

router.get("/getEmployee", getEmployee);

export default router;