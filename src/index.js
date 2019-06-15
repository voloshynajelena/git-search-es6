import GitSearch from './service.js'
const config = {
    selectors:{
        input: '.inpSearch',
        button: '.btnSearch',
        container: '.container'
    },
    resultsCount: 10,
    defaultQuery: 'es6'
}
let objGitSearch = new GitSearch(config);

objGitSearch.init();

