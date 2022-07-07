import checkGithubUser from "../utils/checkGithubUser.js";
import iterateStars from "../utils/iterateStars.js";

type outcomeReturn = {
  winner: string | null;
  loser: string | null;
  draw: boolean;
};

const battleServices = {
  outcome: async (firstUser: string, secondUser: string): Promise<outcomeReturn> => {
    const firstUserData = await checkGithubUser(firstUser);
    const secondUserData = await checkGithubUser(secondUser);

    const firstUserStarsNumber = iterateStars(firstUserData);
    const secondUserStarsNumber = iterateStars(secondUserData);

    let winner = "";
    let loser = "";
    let draw = false;

    if (firstUserStarsNumber === secondUserStarsNumber) {
      draw = true;
    }

    if (firstUserStarsNumber > secondUserStarsNumber) {
      winner = firstUser;
      loser = secondUser;
    } else {
      winner = secondUser;
      loser = firstUser;
    }

    // TODO -> save outcome on database (repository)

    return {
      winner: draw ? null : winner,
      loser: draw ? null : loser,
      draw,
    };
  },
};

export default battleServices;
