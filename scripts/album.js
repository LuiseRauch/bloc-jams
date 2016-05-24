var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumHave = {
    title: 'Songs to Scream at the Sun',
    artist: 'Have Heart',
    label: 'Bridge Nine',
    year: '2008',
    albumArtUrl: 'assets/images/album_covers/14.png',
    songs: [
        { title: 'The Same Son', duration: '0:58' },
        { title: 'Bostons', duration: '2:48' },
        { title: 'Pave Paradise', duration: '1:47'},
        { title: 'On the Bird in the Cage', duration: '2:11' },
        { title: 'Brotherly Love', duration: '2:50'},
        { title: 'No Roses, No Skies', duration: '2:22' },
        { title: 'The Taste of the Floor', duration: '0:53' },
        { title: 'Reflections', duration: '1:13' },
        { title: 'Hard Bark on the Family Tree', duration: '2:58' },
        { title: 'The Same Sun', duration: '3:01' }
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;
    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);

    var albums = [albumPicasso, albumMarconi, albumHave];
    var i = 1;
    albumImage.addEventListener("click", function(event) {
      setCurrentAlbum(albums[i]);
      i++;
      if (i == albums.length) {
        i = 0;
      }
    });
};
