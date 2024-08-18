import { Router } from "express";
import {
  createCard,
  getAllCards,
  getCard,
} from "../controllers/cardController";

const router = Router();

router.post("/cards", createCard);
router.get("/cards", getAllCards);
router.get("/cards/:title", getCard);

export default router;
