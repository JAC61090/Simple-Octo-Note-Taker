const path = require('path');
const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express()
const dbNotes = require('./db/db.json')

const PORT = process.env.PORT || 8080;



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/Users/JAY/Desktop/HOMEWORK/HomExpress11/Develop/public/index.html')
})
app.get('/notes', (req, res) => {
    res.sendFile('/Users/JAY/Desktop/HOMEWORK/HomExpress11/Develop/public/notes.html')
})
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8',function(err, data) {
        console.log('We read the file!!!', JSON.parse(data))
        var translatedDB = JSON.parse(data)
        res.json(translatedDB)
    })
})

app.post('/api/notes', (req, res) => {
    console.log('new note ??', req.body)
    fs.readFile('./db/db.json', 'utf8',function(err, data) {
        var translatedDB = JSON.parse(data)
        console.log('before push translated DB', translatedDB)
        req.body.id = translatedDB.length + 1
        translatedDB.push(req.body)
        console.log('After!!! push', translatedDB);

        var strDB = JSON.stringify(translatedDB)

        fs.writeFile('./db/db.json',strDB, function(err) {
            res.json(translatedDB)
        })
        
    })
});

app.delete("/api/notes/:id" , function(req, res) {
  // WITHIN OUR /api/notes/ ROUTE, THIS FUNCTION LOOKS FOR EACH NOTE'S SPECIFIC ID
  var delNoteId = req.params.id;
  // LIKE BEFORE, WE READ OUR db.json FILE AND PARSE IT INTO AN OBJECT FOR MANIPULATION
  fs.readFile("./db/db.json", function(err, data) {
      if (err) throw err;
      var notes = JSON.parse(data);
      // THEN, WE CHECK EACH ELEMENT IN THAT OBJECT FOR THE MATCHING ID OF THE NOTE TO BE DELETED
      notes.forEach(function(thisNote, i) {
          if (thisNote.id.toString() === delNoteId) {
              // ONCE WE FIND A NOTE THAT MATCHES, WE USE THE .splice(index, #ofElements) TO REMOVE THIS NOTE FROM OUR OBJECT
              notes.splice(i, 1)
          }
      })
      // FINALLY, WE STRINGIFY OUR notes OBJECT SO IT CAN BE REWRITEN TO IT'S ORIGINAL FILE
      fs.writeFile("./db/db.json", JSON.stringify(notes), function(err) {
          if (err) throw err;
      })
  })
  res.send('/Users/JAY/Desktop/HOMEWORK/HomExpress11/Develop/public/notes.html')
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));



