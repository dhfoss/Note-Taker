class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = new Date().getTime();
    }
}

module.exports = Note;