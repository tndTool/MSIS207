import express from "express";
import { updateUser } from "../controllers/user.js";
import { sendPasswordLink } from "../controllers/user.js";

const router = express.Router();

router.post("/updateuser", updateUser);
router.post("/sendpasswordlink", sendPasswordLink);


export default router;