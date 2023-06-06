// Singleton pattern for the music player instance
export class MusicPlayer {
    constructor() {

        this.playlist = [];
        this.favoriteSongs = [];
    }

    static getInstance() {
        if (!MusicPlayer.instance) {
            MusicPlayer.instance = new MusicPlayer();
        }
        return MusicPlayer.instance;
    }

    addSongToPlaylist(song) {
        this.playlist.push(song);
    }

    addSongToFavorites(song) {
        this.favoriteSongs.push(song);
    }

    sortSongsByArtist() {
        this.playlist.sort((a, b) => a.artist.localeCompare(b.artist));
    }
}