import { NextFunction, Request, Response } from "express";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error.name === "unprocessable") {
    res.status(422).send(error.message);
  }

  if (error.name === "notFound") {
    res.status(404).send(error.message);
  }

  res.status(500).send("⚠ Something went wrong!");
}
