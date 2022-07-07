import { Router } from "express";

import validateBattleMiddleware from "../middlewares/validateBatlleMiddleware.js";
import { battle } from "../controllers/battleController.js";

const router = Router();

router.post("/battle", validateBattleMiddleware, battle);
router.get("/ranking");

export default router;
