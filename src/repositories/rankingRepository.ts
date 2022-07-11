import db from "../config/db.js";

export interface Fighters {
  id: number;
  username: string;
  wins?: number;
  draws?: number;
  losses?: number;
}

const rankingRepository = {
  fetchFightersRanking: () => {
    const query = `SELECT *
      FROM "fighters"
      ORDER BY "wins" DESC, "draws" DESC`;

    return db.query<Fighters[]>(query);
  },
};

export default rankingRepository;
