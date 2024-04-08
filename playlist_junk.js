'use strict';





// const userInput = artistId
let artistId = "1430463"
const getJSON = async () => {
  const data = await fetch(`https://api.discogs.com/artists/${artistId}?token=`).then((response) => response.json());
  return data;
};

document.addEventListener('DOMContentLoaded', async () =>{
    console.log("DOM ready");
  
const myArray = await getJSON();
  console.log(myArray);


  console.log("ahhhhhhh");
  // const form = document.querySelector("#input");
  const userInput = document.querySelector("#input");

document.getElementById("form").addEventListener("submit", function (e){
e.preventDefault();
const userInput = document.getElementById("input").value;

const resultArray = getValues(userInput);
console.log('result', resultArray);


})
  
  function getValues(userInput) {
    get(`https://api.discogs.com/artists/${artistId}?token=`).then (function(data){

    const Info = data.filter((artist) => {
      if (artist.id == userInput){
        const list = document.getElementById('form')
        const list2 = document.createElement("li")

        list.append(list2);
      }
      return false;
      

    });
    return Info;
  
  
    
  
  
    });


  }

});
















  


 
        
 









