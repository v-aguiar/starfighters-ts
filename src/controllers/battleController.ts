import { Request, Response } from "express";

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;

  // const { winner: string, loser: string: draw: boolean} await battleServices.engage(firstUser, secondUser);

  // TODO -> Change returned object data to the real info
  res.status(200).json({
    winner: "fulano",
    loser: "ciclano",
    draw: false,
  });
}
