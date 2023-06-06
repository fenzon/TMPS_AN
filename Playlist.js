// Bridge pattern for separating the implementation of playlists
class PlaylistAbstraction {
    constructor(implementor) {
        this.implementor = implementor;
    }

    getCurrentSong() {
        return this.implementor.getCurrentSong();
    }

    playNextSong() {
        return this.implementor.playNextSong();
    }
}
class PlaylistImplementation {
    constructor(songs) {
        this.songs = songs;
        this.currentSongIndex = 0;
    }

    getCurrentSong() {
        return this.songs[this.currentSongIndex];
    }

    playNextSong() {
        this.currentSongIndex++;
        if (this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex = 0;
        }
        return this.getCurrentSong();
    }
}
export class PlaylistBridge extends PlaylistAbstraction {
    constructor(songs) {
        const implementation = new PlaylistImplementation(songs);
        super(implementation);
    }
}



export class Playlist {
    constructor(songs) {
        this.songs = songs;
        this.currentSongIndex = 0;
    }

    getCurrentSong() {
        return this.songs[this.currentSongIndex];
    }

    playNextSong() {
        this.currentSongIndex++;
        if (this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex = 0;
        }
        return this.getCurrentSong();
    }
}