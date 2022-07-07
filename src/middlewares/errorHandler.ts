import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.name === "unprocessable") {
    res.status(422).send(error.message);
  }
}
