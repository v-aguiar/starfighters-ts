import { QueryResult } from "pg";

import db from "../config/db.js";
import { Fighters } from "./rankingRepository.js";

type InsertFightersData = Omit<Fighters, "id">;
type UpdateFightersData = Partial<InsertFightersData>;

type OutcomeParams = "win" | "draw" | "loss";
type Outcome = "wins" | "draws" | "losses";

const battleRepository = {
  checkExistingRecord: (username: string): Promise<QueryResult> => {
    const query = `SELECT *
      FROM "fighters"
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query<Fighters>(query, values);
  },

  insertFighterRecord(username: string, outcome: OutcomeParams): Promise<QueryResult> {
    let outcomeType: Outcome;

    if (outcome === "win") {
      outcomeType = "wins";
    }

    if (outcome === "loss") {
      outcomeType = "losses";
    }

    if (outcome === "draw") {
      outcomeType = "draws";
    }

    const query = `INSERT INTO "fighters" ("username", $1)
      VALUES ($1, 1)
    `;
    const values = [username, outcomeType];

    return db.query<InsertFightersData>(query, values);
  },

  handleDrawOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "draws" = "draws" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query<UpdateFightersData>(query, values);
  },

  handleWinnerOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "wins" = "wins" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query<UpdateFightersData>(query, values);
  },

  handleLoserOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "losses" = "losses" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query<UpdateFightersData>(query, values);
  },
};

export default battleRepository;
