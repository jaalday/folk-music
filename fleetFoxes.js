"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  const greeting = document.createElement("h1");
  const root = document.querySelector("#root");
});

let artistId = "1430463";
let songsPlaylist = [];
// paper kites button songs________________________________________________///////
document.getElementById("songs").addEventListener("click", function (e) {
get(
    `https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`
).then(function (data) {
    
    const { name, releases_url } = data;

    getReleases(releases_url);
});
});


 

document.getElementById("info").addEventListener("click", function (e) {
get(
`https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`
).then(function (data) {
const {members, profile, name } = data;
console.log({ data });
console.log({ name });
const urlName = name.trim//whatever trim stuff spaces in url?
getInfo(name, profile, members);
});
});

document.getElementById("lyrics").addEventListener("click", function (e) {
get2(`https://private-amnesiac-8c3057-lyricsovh.apiary-proxy.com/v1/Fleet%20Foxes/Ragged%20Wood`).then(function(data){

const {lyrics} = data;

getLyrics(lyrics);

});

});


  


//naming the api url---------------------------------------------
  async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
  }



  //showing releases____-----------------------////////////////

  function getReleases(url) {
    get(url + "?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn").then(function (
      data
    ) {
      const { releases } = data;
      console.log({ releases });
      //add inner html shit
      const list = document.createElement("ul");
        root.appendChild(list);

      
      releases.map(function (release) {
       
        const listItem = document.createElement("li");
        const addToPlaylist = document.createElement("button");
        addToPlaylist.type = "button";
        addToPlaylist.textContent = "Add to Playlist";

        listItem.textContent = `${release.title} `;
        listItem.appendChild(addToPlaylist);

        list.appendChild(listItem);

        addToPlaylist.addEventListener("click", function (e) {
          songsPlaylist = [...songsPlaylist, release.title];
          showPlaylist(songsPlaylist);
        });
      });
    });
  }
  function showPlaylist(songs) {
    const playlistEl = document.querySelector("#playlist");
    if (!playlistEl) {
      const newPlaylistEl = document.createElement("div");
      newPlaylistEl.id = "playlist";
      root.appendChild(newPlaylistEl);
      songsPlaylist.map(function (song) {
        const songParagraph = document.createElement("p");
        songParagraph.textContent = song;
        playlistEl.appendChild(songParagraph);
      });
    } else {
      let song = songsPlaylist[0];
      if (songsPlaylist.length >= 1) {
        song = songsPlaylist[songsPlaylist.length - 1];
      }

      const songParagraph = document.createElement("p");
      songParagraph.textContent = song;
      playlistEl.appendChild(songParagraph);
    }
  }
//get info//////////////////_______________________________________
  function getInfo(name, profile, members) {
    
      
      

      const listItem = document.createElement("p");
      listItem.textContent = `${profile} - ${members.length}`;
      
      root.appendChild(listItem);
 
  }



  //_-------------------------///////////////////////////////////////


const url2 = 'https://private-amnesiac-8c3057-lyricsovh.apiary-proxy.com/v1/The%20Paper%20Kites/Bloom';

async function get2(url2) {
    console.log({ url2 });
    return fetch(url2, {
      method: "GET",
      
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        
        return data;
        
      });
  }

  function getLyrics(lyrics) {
    console.log(lyrics);
    
      const listItem2 = document.createElement("pre");
        listItem2.innerHTML = lyrics;
        root.appendChild(listItem2);

   
  }