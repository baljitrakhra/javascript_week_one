const got = require('got');

const fetchJson = (url, object) => {
  got(url)
  .then((response) => {
    object(JSON.parse(response.body));
  });
}

module.exports = fetchJson;