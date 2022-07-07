import { Router } from "express";

import validateBattleMiddleware from "../middlewares/validateBatlleMiddleware.js";

import { battle } from "../controllers/battleController.js";
import { fetchRanking } from "../controllers/rankingController.js";

const router = Router();

router.post("/battle", validateBattleMiddleware, battle);
router.get("/ranking", fetchRanking);

export default router;
