import fetch from 'cross-fetch';


class GitSearch {

  createEvents() {
    let btnSearch = document.querySelector('.btnSearch')
    btnSearch.addEventListener('click', async e => {

      console.log("---->", "createEvents()")
      const data = await this.getData(this.getInputData())
      this.parseData(data)
    }, false)
  }

  getInputData() {
    let inpSearch = document.querySelector('.inpSearch')
    console.log("---->", "getInputData()")
    return inpSearch.value
  }

  /**
   * 
   * @param {string} srsearch 
   * @param {number} rclimit 
   * @returns {string}
   */
  getUrl(srsearch = 'es6', rclimit = 6) {

    console.log("---->", "getUrl()")
    const urlApi = "https://api.github.com/search/repositories?"
    let per_page = 10,
      url = `${urlApi}q=${srsearch}&page=${rclimit}&per_page=${per_page}`
    return url
  }
  /**
   * 
   * @param {string} key1 
   * @param {number} key2
   * @returns {promise} 
   */
  getData(key1, key2) {
    console.log("---->", "getData()")
    return fetch(this.getUrl(key1, key2))
      .then(function (response) {
        return response.json();
      })
  }
  /**
   * 
   * @param {obj} sourseData
   * @returns {Array} 
   */
  parseData(sourseData) {
    console.log("----> parseData()")


    let parsedData = sourseData.items.map(function (item) {
      return {
        title: item.name,
        url: item.git_url,
        description: item.description
      }
    })
console.log(parsedData)
return parsedData
  }

  searchResult() {
    let inpResult = document.querySelector('.inpResult')
    inpResult.innerHTML
  }
}
export default GitSearch