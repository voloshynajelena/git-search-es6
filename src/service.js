import fetch from 'cross-fetch';


class GitSearch {
  constructor(){
    this.model = []
  }
  createEvents() {
    let btnSearch = document.querySelector('.btnSearch')
    btnSearch.addEventListener('click', async e => {

      console.log("----> createEvents()")
      const data = await this.getData(this.getInputData())
      
      this.model = this.parseData(data)
      this.render()
    }, false)
  }

  /**
   * 
   * @returns {string}
   */
  getInputData() {
    let inpSearch = document.querySelector('.inpSearch')
    console.log("----> getInputData()")
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
    const { items } = sourseData
    return items.map( item =>
       ({
        title: item.name,
        url: item.html_url,
        description: item.description
      })
    )
  }

render(){
console.log(this.model)
let container = document.querySelector('.container')
this.model.map(item =>container.innerHTML += `<h1><a href="${item.url}">${item.title}</a></h1><p>${item.description}</p>`)

}

}
export default GitSearch