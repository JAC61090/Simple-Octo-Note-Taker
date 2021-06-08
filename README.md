# 11 Express.js: Note Taker

## Simple-Octo-Note-Taker

## Author & Links

- git JAC61090
- https://github.com/JAC61090/Simple-Octo-Note-Taker.git
- https://takenotesson.herokuapp.com 



Here is a simple note taker application for quick and easy usage. 

## Table of Contents
1. Introduction
2. Technology
3. Your Task
4. User Story
5. Acceptance Criteria
6. Code Snippets
7. Author & Links

# Introduction
The Application allows the user to quickly create, save, and or delete notes using node.js, the express npm package, and the browser(google Chrome).

# Technology
1. JavaScript
2. Node.JS
3. Express(npm package)
4. CSS framework (bootstrap)
5. HTML
6. Mongooose

## Your Task

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


# Code Snippets

Example of POST:
- app.post('/api/notes', (req, res) => {
    console.log('new note ??', req.body)
    fs.readFile('./db/db.json', 'utf8',function(err, data) {
        var translatedDB = JSON.parse(data)

Example of Delete: 

* app.delete("/api/notes/:id" , function(req, res) {
  // WITHIN OUR /api/notes/ ROUTE, THIS FUNCTION LOOKS FOR EACH NOTE'S SPECIFIC ID
  var delNoteId = req.params.id;


