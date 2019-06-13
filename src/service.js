import fetch from 'cross-fetch';


class GitSearch {
 createEvents (){
   let btnSearch = document.querySelector('.btnSearch')
   btnSearch.addEventListener('click',e=>{
    
    this.getData( this.getInputData() )
  },false)
 }
 getInputData(){
  let inpSearch = document.querySelector('.inpSearch')
  
    return inpSearch.value
 }
 getUrl (srsearch='es6', rclimit=6){
    const urlApi = "https://api.github.com/search/repositories?"
    let per_page=10,
        url=`${urlApi}q=${srsearch}&page=${rclimit}&per_page=${per_page}`
    return url
}

 getData(key1,key2){
   
   return fetch(this.getUrl(key1,key2))
  .then(function(response) {
    return response.json();
  })
}

}
export default GitSearch