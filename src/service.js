import fetch from 'cross-fetch';


class GitSearch {
  constructor(config){
    this.model = []
    this.selectors = config.selectors
    this.resultsCount = config.resultsCount
    this.query = config.defaultQuery
    this.urlApi = "https://api.github.com/search/repositories?"

  }

  addEvents(){
    let inpButton = document.querySelector(this.selectors.button)
    inpButton.addEventListener('click', _=>{
      this.getInputData()
      this.getData().then(e=>{
        this.prepareData(e)
        this.render()
      })
      
    }, false)
  }

  /**
   * @returns {string}
   */
  getUrl(){
    return `${this.urlApi}q=${this.query}&per_page=${this.resultsCount}`
  }

  /**
   * @returns {Promise}
   */
  getData(){
    return fetch(this.getUrl())
      .then(response => response.json())
      .catch(error => console.error(error))
  }

  getInputData(){
    let inpSearch = document.querySelector(this.selectors.input)
    this.query = inpSearch.value
  }

  prepareData(objData){
    this.model = objData.items.map(item=>{
      var objDataItems = {
        title: item.name,
        description: item.description,
        url: item.html_url
      }
      return objDataItems
    })
    console.log(this.model)
  }

  render(){
    let container = document.querySelector(this.selectors.container)
    this.model.map(item=> container.innerHTML += `<h1><a href="${item.url}">${item.title}</a></h1><p>${item.description}</p>`)
  }

  init(){
    this.getData()
    this.addEvents()
  }
  
}
export default GitSearch