import { SongBuilder } from "./SongBuilder.js";
// Factory Method pattern for creating different types of songs
export class SongFactory {
    createSong(title, artist) {
        return new SongBuilder()
            .withTitle(title)
            .withArtist(artist)
            .build();
    }
}
