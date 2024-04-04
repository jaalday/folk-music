'use strict';





// const userInput = artistId
let artistId = "1430463"
const getJSON = async () => {
  const data = await fetch(`https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`).then((response) => response.json());
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
    get(`https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`).then (function(data){

    const Info = data.filter((artist) => {
      if (artist.id == userInput){
        const list = document.getElementById('form')
        const list2 = document.createElement("li")

        list.append(list2);
      }
      return false;
      

    });
    return Info;
  
    // const{releases} = data;
    // console.log({releases});
    // const list = document.createElement("ul");
    // root.appendChild(list);
    
  
  
    });


  }

});













//     // greeting.textContent = "";
//     // root.append(greeting);

//     const todoForm = document.querySelector('#todo');

//     todoForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const taskInput = this.querySelector('input[name="taskEntry"]');
//         generateList(taskInput);
//     });
//     function generateList(taskInput) {
//         //getlist
        
//         const taskList = document.querySelector('#taskList');
//         const taskElement = document.createElement('li');
//         taskElement.textContent = taskInput.value;
//         taskList.appendChild(taskElement);
//         clearInput(taskInput);

        
        
//     }
//      function clearInput(input) {
//         input.value = '';
//       return;
//     };
        


//   });


  


 
        
 
  

// console.log('pooooooop');

// function get(url) {
//     return fetch(
//       `https://api.discogs.com/artists/?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`,
//       {
//         method: "GET",
//         headers: {
//           "User-Agent": "jac/3",
//         },
//       }
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         return data;
//       });
//   }

//   function getInfo(url) {
//     get(url + "?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn").then(function (
//       data
//     ) {
//       const { profile, members, } = data;
      
//       console.log({ data });
//       const makeNewList = document.createElement("ul");
//       root.appendChild(makeNewList);

//       const listItem = document.createElement("li");
//       listItem.textContent = `${profile} - ${members}`;
//       const list = document.createElement("ul");
//       list.appendChild(listItem);
//     });
//   }









