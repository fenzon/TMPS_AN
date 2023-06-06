import { MusicPlayer } from "./MusicPlayer.js";
import { SongFactory } from "./SongFactory.js";
// Facade pattern for simplifying interaction with the music player
export class PlayerFacade {
    constructor() {
        this.musicPlayer = MusicPlayer.getInstance();
        this.songFactory = new SongFactory();
    }

    addSongToPlaylist(title, artist) {
        const song = this.songFactory.createSong(title, artist);
        this.musicPlayer.addSongToPlaylist(song);
    }

    addSongToFavorites(title, artist) {
        const song = this.songFactory.createSong(title, artist);
        this.musicPlayer.addSongToFavorites(song);
    }

    sortSongsByArtist() {
        this.musicPlayer.sortSongsByArtist();
    }
}
//The class acts as a simplified interface to the underlying complex subsystems of the music player, namely the MusicPlayer and SongFactory classes.