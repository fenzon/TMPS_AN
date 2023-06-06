// Iterator pattern for iterating over the playlist
export class PlaylistIterator {
    constructor(playlist) {
        this.playlist = playlist;
        this.currentIndex = 0;
    }

    hasNext() {
        return this.currentIndex < this.playlist.songs.length;
    }

    next() {
        const song = this.playlist.songs[this.currentIndex];
        this.currentIndex++;
        return song;
    }
}