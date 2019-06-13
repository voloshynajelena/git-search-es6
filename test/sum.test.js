
const GitSearch = require('../src/service.js');
const gitSearch = new GitSearch();

test('getUrl should return string', () => {
  expect(gitSearch.getUrl()).toBe('https://api.github.com/search/repositories?q=es6&page=6&per_page=10');
});
test('getData should return promise', () => {
    console.log(gitSearch.getData)
  expect(gitSearch.getData().then).toBeDefined();
});

