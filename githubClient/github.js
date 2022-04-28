require('./githubApi');

class Github {
  constructor (api) {
    this.api = api;
    this.data = 0;
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

// const GithubApi = require('./githubApi');
// const Github = require('./github');

// const api = new GithubApi();
// const github = new Github(api);

// github.fetch('sinatra/sinatra');

// github.getRepoData();