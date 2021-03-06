import { Request, Response } from "express";

import battleServices from "../services/battleServices.js";

export interface BattleBody {
  firstUser: string;
  secondUser: string;
}

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser }: BattleBody = req.body;

  const { winner, loser, draw } = await battleServices.outcome(firstUser, secondUser);

  res.status(200).json({
    winner,
    loser,
    draw,
  });
}
