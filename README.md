# Note-Taker

## Table of Contents
[Description](https://github.com/dhfoss/Note-Taker/#description)  
[Installation](https://github.com/dhfoss/Note-Taker/#installation)  
[Usage](https://github.com/dhfoss/Note-Taker/#usage)  
[Questions](https://github.com/dhfoss/Note-Taker/#questions)

### Description
This is an app that allows the user to write and save notes.  It uses express to set up a server, so that the notes can be saved in a database file that can be accessed at a later time.

### Installation
This app uses express.  Run `npm install` to access it.

### Usage
To write notes, first click the pen icon in the top right. The app will diplay two inputs, one for the note's title, and one for the note's text.  
![Sample Note](/Develop/screen-shots/1-Sample-Note.png?raw=true "Sample Note")

Click the lock icon to save the note.  It will then appear on the sidebar on the left of the screen.  
![Saved Note](/Develop/screen-shots/2-Saved-Note.png?raw=true "Saved Note")

When a note is saved, it is given a timestamp with the `New Date().getTime();`.  This acts as the unique id that will be saved along with the note, and called upon when the user deletes a note.  
![Note ID](/Develop/screen-shots/3-Note-Id.png?raw=true "Note ID")

To delete a saved note, click on the trashcan icon next to the note in the sidebar. The app will then look at the id, iterate though all the saved notes in the database file, and delete the note with the matching id.  The page will then update itself.  
![Delete Button](/Develop/screen-shots/4-Delete-Button.png?raw=true "Delete Button")

### Questions
For questions contact me at:  
Email: dhfoss89@gmail.com  
https://github.com/dhfoss
