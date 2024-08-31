import express from "express";
import { checkHealth } from "../controllers/checkServerHealth.js";

const router = express.Router();

// Route to get expenses by address
router.post("/", checkHealth);

export default router;
