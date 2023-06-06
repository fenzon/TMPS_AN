// Memento pattern for saving and restoring the state of the music player
class MusicPlayerMemento {
    constructor(playlist, favoriteSongs) {
        this.playlist = playlist;
        this.favoriteSongs = favoriteSongs;
    }
}

export class MusicPlayerCareTaker {
    constructor() {
        this.mementos = [];
    }

    saveState(musicPlayer) {
        const memento = new MusicPlayerMemento(
            musicPlayer.playlist,
            musicPlayer.favoriteSongs
        );
        this.mementos.push(memento);
    }

    restoreState() {
        const lastMemento = this.mementos.pop();
        if (lastMemento) {
            return lastMemento;
        }
        return null;
    }
}
