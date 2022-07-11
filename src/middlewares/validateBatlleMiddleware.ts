import { NextFunction, Request, Response } from "express";

import { BattleBody } from "../controllers/battleController.js";
import battleSchema from "../schemas/battleSchema.js";

export default function validateBattleMiddleware(req: Request, res: Response, next: NextFunction) {
  const { firstUser, secondUser }: BattleBody = req.body;

  const { error } = battleSchema.validate({ firstUser, secondUser }, { abortEarly: false });
  if (error) {
    throw {
      name: "unprocessable",
      message: error.details.map((detail) => detail.message),
    };
  }

  next();
}
