import { PlayerFacade } from "./PlayerFacade.js";
import { PlaylistIterator } from "./PlayerIterator.js";
import { Playlist } from "./Playlist.js";









let musicPlayer = new PlayerFacade();
musicPlayer.addSongToPlaylist("Song 1", "Artist B");
musicPlayer.addSongToPlaylist("Song 2", "Artist A");
musicPlayer.addSongToPlaylist("Song 3", "Artist C");

musicPlayer.sortSongsByArtist();

const playlistIterator = new PlaylistIterator(new Playlist(musicPlayer.musicPlayer.playlist));

while (playlistIterator.hasNext()) {
    const song = playlistIterator.next();
    console.log(`Now playing: ${song.title} - ${song.artist}`);
}
