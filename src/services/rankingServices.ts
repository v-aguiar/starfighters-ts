import rankingRepository from "../repositories/rankingRepository.js";

const rankingServices = {
  fetchRanking: async () => {
    const ranking = await rankingRepository.fetchFightersRanking();

    return ranking;
  },
};

export default rankingServices;
