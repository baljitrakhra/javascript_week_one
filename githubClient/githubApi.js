const got = require('got');

class GithubApi{
  fetchRepositoryData = (repo, callback) => {
    got(`https://api.github.com/repos/${repo}`)
    .then((response) =>{
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = GithubApi;