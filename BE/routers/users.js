import express from "express";
import { updateUser } from "../controllers/user.js";

const router = express.Router();

router.post("/updateuser", updateUser);


export default router;