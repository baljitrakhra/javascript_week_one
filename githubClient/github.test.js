const Github = require('./github');
const GithubApi = require('./githubApi');
describe('Github', () => {
  it('gets the repo data fetched by the Api class', () => {

    // 1. We mock the implementation of the API class
    const mockedApi = {
      // 2. It has a method `fetchRepositoryData`...
      fetchRepositoryData: (repoName, callback) => {
        // 3. ...which calls the given callback function
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    }

    // 4.  We can now call
    //    `mockedApi.fetchRepositoryData('repo-name', callbackFunction)`
    //     and get the expected behaviour (our callbackFunction will be called 
    //     with the fake repo data)

    const github = new Github(mockedApi);

    // 5. The mocked implementation will be called instead of the real one
    github.fetch('sinatra/sinatra');
    
    // 6. We should get the fake repo data by calling `github.getRepoData()`
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });
});
// const GithubApi = require('./githubApi');

// jest.mock('./githubApi');

// describe('Github', () => {
//   const api = new GithubApi;
//   const hub = new Github(api);
//   // beforeEach(() => {
//   //   GithubApi.mockClear();
//   // });

//   it('accepts an api as an argument', () => {
//     expect(hub.api).toEqual(api);
//     // const mockGithubApi = new GithubApi();
//     // mockGithubApi.fetchRepositoryData().mockImplementation();
//   });

//   it('fetch saves the url as a variable', () => {
//     hub.fetch('sinatra/sinatra');
//     expect(hub.data).toEqual('sss');
//   });

//   it('getRepoData should return a JS object with the repoistory data', () => {
    
//   });
// });