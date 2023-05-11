import { githubAxiosInstance } from "../utils/AxiosInstance";

/**
 * Retrieves the list of repos from my GitHub.
 *
 * @returns a list of repository of my profile
 */
export function fetchRepositories() {
  return githubAxiosInstance.get(`/users/${process.env.GITHUB_USERNAME}/repos`);
}

export function fetchRepositoryLanguage(repositoryName) {
  return githubAxiosInstance.get(
    `/repos/${process.env.GITHUB_USERNAME}/${repositoryName}/languages`
  );
}
