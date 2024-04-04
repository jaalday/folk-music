"use strict";

document.addEventListener("DOMContentLoaded", function () {
console.log("CONTENT LOADED");
  
});

const url2 = 'https://private-amnesiac-8c3057-lyricsovh.apiary-proxy.com/v1/The%20Paper%20Kites/Bloom';
console.log(url2);
async function get(url2) {
    console.log({ url2 });
    return fetch(url2, {
      method: "GET",
      
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        return data;
        
      });
  }