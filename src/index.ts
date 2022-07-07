import express, { json } from "express";

import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import "express-async-errors";

import router from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";

const server = express();

dotenv.config();

server.use(cors());
server.use(json());

server.use(router);
server.use(errorHandler);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    chalk.bold.greenBright("\n🚀 Server is running!") +
      chalk.bold.cyanBright("\n\nListening on port " + PORT + "...\n")
  );
});
