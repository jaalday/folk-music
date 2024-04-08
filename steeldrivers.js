"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  const greeting = document.createElement("h1");
  const root = document.querySelector("#root");
});

let artistId = "1105938";
let songsPlaylist = [];
// steeldrivers button songs________________________________________________///////
document.getElementById("songs").addEventListener("click", function (e) {
    get(
      `https://api.discogs.com/artists/${artistId}?token=`
    ).then(function (data) {
      
      const { name, releases_url } = data;

      getReleases(releases_url);
    });
  });


  //info buttin still broken--------------------------------///////

document.getElementById("info").addEventListener("click", function (e) {
get(
    `https://api.discogs.com/artists/${artistId}?token=`
).then(function (data) {
    const { profile, name } = data;
    console.log({ data });
    console.log({ name });
    const urlName = name.trim//whatever trim stuff
    getInfo(name);
});
});



  


//naming the api url---------------------------------------------
  async function get(url) {
    console.log({ url });
    return fetch(url, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }

  function showArtist(artistNam) {
    const artistHeader = document.createElement("h2");
    artistHeader.textContent = artistNam;
    root.appendChild(artistHeader);
  }

  //showing releases____-----------------------////////////////

  function getReleases(url) {
    get(url + "?token=").then(function (
      data
    ) {
      const { releases } = data;
      console.log({ releases });
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
  function getInfo(url) {
    get(url + "?token=").then(function (
      data
    ) {
      const { profile, members, urls } = data;
      console.log(profile);
      console.log({ data });
      const makeNewList = document.createElement("ul");
      root.appendChild(makeNewList);

      const listItem2 = document.createElement("li");
      listItem2.textContent = `${profile} - ${members}`;
      const list = document.createElement("ul");
      list.appendChild(listItem2);
    });
  }


//api 2 ____________________________________________________



const url_2 = 'https://api.lyrics.ovh/v1/The Paper Kites/Bloom';

fetch(url_2)
    .then((response) => {
        return response.json();
    })
    .then((data) => {})
        let lyrics = data;
        console.log(data);








// async function get(url_2) {
//     console.log({ url_2 });
//     return fetch(url_2, {
//       method: "GET",
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data2) {
//         return data2;
//       });
//   }




// fetch(url_2)
  

// function getTitles(url_2){
// get(url_2 + token).then(function(data2)
// {
//     const {title, album} = data2;
//     console.log({title});
//     const albumList = document.createElement('ul');
//     root.appendChild(albumList);

//     title.map(function(title) {
//         const listAlbum = document.createElement('li');
//         listAlbum.textContent = `${album.title}`;
        

//     })
// });

// }



