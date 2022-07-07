import { Endpoints } from "@octokit/types";

import octokit from "../config/octokit.config.js";

type getUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"];

export default async function checkGithubUser(username: string) {
  try {
    const repos: getUserReposResponse = await octokit.request("GET /users/{username}/repos", {
      username,
    });

    return repos;
  } catch (error) {
    console.error("try catch error: ", error);
    throw {
      name: "notFound",
      message: `⚠ No github account found with given username: "${username}"!`,
    };
  }
}
