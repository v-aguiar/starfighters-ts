import { NextFunction, Request, Response } from "express";

import battleSchema from "../schemas/battleSchema.js";

export default function validateBattleMiddleware(req: Request, res: Response, next: NextFunction) {
  const firstUser: string = req.body.firstUser;
  const secondUser: string = req.body.secondUser;

  const { error } = battleSchema.validate({ firstUser, secondUser }, { abortEarly: false });
  if (error) {
    throw {
      name: "unprocessable",
      message: error.details.map((detail) => detail.message),
    };
  }

  next();
}
