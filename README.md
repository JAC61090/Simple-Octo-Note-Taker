# 11 Express.js: Note Taker

Here is a simple note taker application for quick and easy usage. 

## Table of Contents
1. Introduction
2. Technology
3. Code Snippets
4. Author & Links

# Introduction
The Application allows the user to quickly create, save, and or delete notes using node.js, the express npm package, and the browser(google Chrome).

# Technology
1. JavaScript
2. Node.JS
3. Express(npm package)
4. CSS framework (bootstrap)
5. HTML

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

## Author & Links

- author github JAC61090
- 

