import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  userAgent: "starfighters V1.0.0",
  baseUrl: "https://api.github.com",
});

export default octokit;
