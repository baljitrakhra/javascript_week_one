require('./githubApi');

class Github {
  constructor (api) {
    this.api = api;
  }

  fetch = (repo) => {
    this.api.fetchRepositoryData(repo, (repositoryData) => {
      this.data = repositoryData;
    });
  }

  getRepoData = () => {
    return this.data;
  }
}

module.exports = Github;