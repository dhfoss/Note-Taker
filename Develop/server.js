// =============
// Dependencies
// =============

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fs = require('fs');
const { dirname } = require('path');

const Note = require(__dirname + '/classes/Note.js');
const db = require(__dirname + '/db/db.json');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT);
});

// =======
// Routes
// =======
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
});

app.get('/api/notes', (req, res) => {
    res.send(db);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/api/notes', (req, res) => {
    db.push(new Note(req.body.title, req.body.text));
    const dbString = JSON.stringify(db);
    fs.writeFile(__dirname + '/db/db.json', dbString, (err, data) => {
        if (err) throw err;
        console.log(db);
        res.json(db);
    });
});

app.delete('/api/notes/:chosen', (req, res) => {
    const chosen = req.params.chosen;
    db.forEach(note => {
        if (chosen == note.id) {
            db.splice(db.indexOf(note), 1);
        }
    });
    const dbString = JSON.stringify(db);
    fs.writeFile(__dirname + '/db/db.json', dbString, (err, data) => {
        if (err) throw err;
        res.json(db);
    });
});