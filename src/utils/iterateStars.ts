import { Endpoints } from "@octokit/types";

type getUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"];

export default function iterateStars({ data: repos }: getUserReposResponse) {
  let stars = 0;

  repos.forEach((repo) => {
    stars += repo.stargazers_count;
  });

  return stars;
}
