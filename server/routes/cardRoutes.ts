import { Router } from "express";
import { createCard } from "../controllers/cardController";

const router = Router();

router.post("/cards", createCard);

export default router;
