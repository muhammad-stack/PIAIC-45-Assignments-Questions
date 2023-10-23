

interface Album {
  artist_name: string;
  album_title: string;
  tracks?: number;
}

function make_album(
  artist_name: string,
  album_title: string,
  tracks?: number
): Album {
  const album: Album = {
    artist_name,
    album_title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

const album1 = make_album("Ayema BAig", "Pasoori");
const album2 = make_album("rafay sheikh", "Zindagi", 5);
const album3 = make_album("Abeer", "hum Tum");

console.log(album1);
console.log(album2);
console.log(album3);
