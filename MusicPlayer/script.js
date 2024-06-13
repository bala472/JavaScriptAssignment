let songList = [
    {
        "name": "Irumbile oru idhaiyam",
        "artist": "AR Rahman",
        "mp3": "Irumbile-Oru-Idhaiyam.mp3",
        "img": "enthiran.jpg",
        "isFavourite": false
    },
    {
        "name": "Anbil Avan",
        "artist": "Devan Ekambharam & Chinmay",
        "mp3": "Anbil-Avan.mp3",
        "img": "vtv.jpg",
        "isFavourite": true
    },
    {
        "name": "Manjal Veiyil",
        "artist": "Hariharan",
        "mp3": "Manjal-Veiyil.mp3",
        "img": "vettaiyadu-villaiyadu.avif",
        "isFavourite": false
    },
    {
        "name": "Osaka Osaka",
        "artist": "Aniruth Ravichandran",
        "mp3": "Osaka Osaka.mp3",
        "img": "vanakkam chennai.jpg",
        "isFavourite": false
    },
    {
        "name": "NewYork Nagaram",
        "artist": "AR Rahman",
        "mp3": "New York Nagaram.mp3",
        "img": "silunu oru kadhal.jpg",
        "isFavourite": false
    }
];

function renderRightComponent(song) {
    var rightComponent = document.getElementById("right-component");
    rightComponent.innerHTML = "";

    var albumImage = document.createElement("img");
    albumImage.id = "album-image";
    albumImage.src = song.img;
    var albumName = document.createElement("div");
    albumName.innerText = song.name;
    var albumArtist = document.createElement("div");
    albumArtist.innerText = song.artist;
    var audio = document.createElement("audio");
    audio.src = song.mp3;
    audio.controls = true;

    rightComponent.append(albumImage);
    rightComponent.append(albumName);
    rightComponent.append(albumArtist);
    rightComponent.append(audio);
}

function renderLists() {
    var htmlSongList = document.getElementById("song-list");
    htmlSongList.innerHTML = "";
    var cardtitle = document.createElement("div");
    cardtitle.id = "song-list-title";
    cardtitle.innerText = "Song List";
    htmlSongList.append(cardtitle);

    var htmlFavouriteList = document.getElementById("favourite");
    htmlFavouriteList.innerHTML = "";
    var favouriteTitle = document.createElement("div");
    favouriteTitle.innerText = "Favourite";
    htmlFavouriteList.append(favouriteTitle);

    songList.forEach((song, index) => {
        var songCard = document.createElement("div");
        songCard.className = "song-item";
        songCard.innerText = song.name;
        songCard.onclick = function() {
            renderRightComponent(song);
        }

        if (song.isFavourite) {
            var removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            removeButton.onclick = function(event) {
                event.stopPropagation();
                song.isFavourite = false;
                renderLists();
            }
            songCard.append(removeButton);
            htmlFavouriteList.append(songCard);
        } else {
            var favouriteButton = document.createElement("button");
            favouriteButton.innerText = "Favourite";
            favouriteButton.onclick = function(event) {
                event.stopPropagation();
                song.isFavourite = true;
                renderLists();
            }
            songCard.append(favouriteButton);
            htmlSongList.append(songCard);
        }
    });
}

renderLists();
renderRightComponent(songList[1])