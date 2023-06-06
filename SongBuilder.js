// Builder pattern for creating a song
export class SongBuilder {
    constructor() {
        this.song = new Song();
    }

    withTitle(title) {
        this.song.title = title;
        return this;
    }

    withArtist(artist) {
        this.song.artist = artist;
        return this;
    }

    build() {
        return this.song;
    }
}

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}