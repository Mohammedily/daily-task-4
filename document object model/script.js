
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function(){
    var easy = JSON.parse(this.response);
    console.log(easy);
     easy.forEach(data => {
        var  treat  = `<div>
         <h3>${data.name}</h3>
         <img src="${data.flag}" />
         <p><b> region </b>:${data.region}</p>
   <p><b> subregion </b>:${data.subregion}<p>
  <p><b> opulation </b>:${data.population}</p>
     </div>
 `
 console.log(data.name ,data.flag, data.region ,data.subregion , data.population );
 })


}
xhr.onerror = function(){
    console.log("Error:"+ this.statusText)
}
xhr.send();
