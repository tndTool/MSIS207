import express from "express";
import { addEmployee, deleteEmployee, getEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/addEmployee", addEmployee);

router.post("/deleteEmployee", deleteEmployee);

router.get("/getEmployee", getEmployee);

export default router;