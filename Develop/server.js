const express = require('express');
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

// Add something here to make it available on heroku
const PORT = 3000;

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
    fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notejson = JSON.parse(data);
        console.log(notejson[0].text);
        res.json(notejson);
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

