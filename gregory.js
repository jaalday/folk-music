"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  const greeting = document.createElement("h1");
  const root = document.querySelector("#root");
  let artistId = "1181097";
  let songsPlaylist = [];

document.getElementById("songs").addEventListener("click", function (e) {
  get(
    `https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`
  ).then(function (data) {
    // Destructure our data
    const { name, releases_url } = data;

    getReleases(releases_url);
  });
    

document.getElementById("info").addEventListener("click", function (e) {
  get(
    `https://api.discogs.com/artists/${artistId}?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn`
  ).then(function (data) {
    const { realname, profile } = data;
    console.log(realname, profile);

    getInfo(realname, profile); 

    
  });
  });
});
  

  // We're defining a default, but this will change!

  async function get(url) {
  return fetch( url, 
    {
      method: "GET",
      headers: {
        "User-Agent": "SeanIsRad/3.0",
      },
    }
  )
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

  function getReleases(url) {
    get(url + "?token=uFuTrfqnpehmXnlCPmCfpgtnvApsKRGDVZgURLxn").then(function (data) {
      // Destructure the releases
      const { releases } = data;
      console.log({ releases });
      // Create  UL
      const list = document.createElement("ul");
      // Append it to the #root
      root.appendChild(list);

      // Loop through the releases array
      releases.map(function (release) {
        // Create a list item
        const listItem = document.createElement("li");
        //create button
        const addToPlaylist = document.createElement("button");
        addToPlaylist.type = "button";
        addToPlaylist.textContent = "Add to Playlist";

        // Add the release title to the list item
        listItem.textContent = `${release.title} `;
        listItem.appendChild(addToPlaylist);
        // Append the lisi item to the list
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

  function getInfo(realname, profile) {
   
    
      const listItem = document.createElement("p");
      listItem.textContent = `${profile} - ${realname}`;
      root.appendChild(listItem);

      
   
      

      console.log(getInfo);
    
  }
});





