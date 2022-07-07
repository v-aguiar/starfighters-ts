import { QueryResult } from "pg";

import db from "../config/db.js";

const battleRepository = {
  checkExistingRecord: (username: string): Promise<QueryResult> => {
    const query = `SELECT *
      FROM "fighters"
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query(query, values);
  },

  insertFighterRecord(username: string, outcome: string): Promise<QueryResult> {
    let outcomeType = "";

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
    const values = [username, outcome];

    return db.query(query, values);
  },

  handleDrawOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "draws" = "draws" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query(query, values);
  },

  handleWinnerOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "wins" = "wins" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query(query, values);
  },

  handleLoserOutcome: (username: string): Promise<QueryResult> => {
    const query = `UPDATE "fighters"
      SET "losses" = "losses" + 1
      WHERE "username" = $1
    `;
    const values = [username];

    return db.query(query, values);
  },
};

export default battleRepository;
