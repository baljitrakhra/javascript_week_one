const Github = require('./github');
const GithubApi = require('./githubApi');
// const GithubApi = require('./githubApi');

// jest.mock('./githubApi');

describe('Github', () => {
  const api = new GithubApi;
  const hub = new Github(api);
  // beforeEach(() => {
  //   GithubApi.mockClear();
  // });

  it('accepts an api as an argument', () => {
    expect(hub.api).toEqual(api);
    // const mockGithubApi = new GithubApi();
    // mockGithubApi.fetchRepositoryData().mockImplementation();
  });

  it('fetch saves the url as a variable', () => {
    hub.fetch('sinatra/sinatra');
    expect(hub.data).toEqual('sinatra/sinatra');
  });

  it('getRepoData should return a JS object with the repoistory data', () => {
    
  });
});