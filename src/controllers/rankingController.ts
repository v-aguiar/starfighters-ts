import { Request, Response } from "express";

import rankingServices from "../services/rankingServices.js";

export async function fetchRanking(req: Request, res: Response) {
  const ranking = await rankingServices.fetchRanking();

  res.status(200).send(ranking);
}
