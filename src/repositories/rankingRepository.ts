import db from "../config/db.js";

const rankingRepository = {
  fetchFightersRanking: () => {
    const query = `SELECT *
      FROM "fighters"
      ORDER BY "wins" DESC, "draws" DESC`;

    return db.query(query);
  },
};

export default rankingRepository;
