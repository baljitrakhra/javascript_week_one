const got = require('got');

const fetchRepositoryInfo = (repo, callBack) => {
  got(`https://api.github.com/repos/${repo}`)
    .then((response) =>{
      callBack(JSON.parse(response.body));
    });

}

module.exports = fetchRepositoryInfo;