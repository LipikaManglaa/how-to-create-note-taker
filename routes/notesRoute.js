const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const path = require('path');
const fs = require('fs');
// const appNotes = require('.');


notes.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
  });
  

  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  notes.post('/api/notes', (req, res) => {
   db=fs.readFileSync('./db/db.json').then((data) => res.json(JSON.parse(data)))
  
    // creating body for note
    const { title,text } = req.body;

      // If all the required properties are present
      if (title && text) {
        const newNotes = {
           title,
           text,
         notes_id: uuid(),
          };
          db.push(newNotes);
          fs.writeFileSync('db/db.json', JSON.stringify(db));
          res.json(db);
// readAndAppend(newNotes, 'db/db.json');

//     const response = {
//       status: 'success',
//       body: newNotes,
//     };

//     res.json(response);
//   }
//    else {
//     res.json('Error in posting notes');
//   }

        
        }
  });






// notes.get('/', (req, res) =>
// fs.readFileSync('./db/db.json').then((data) => res.json(JSON.parse(data)))
// );

// POST Route for submitting notes
// notes.post('/', (req, res) => {
//     // Destructuring assignment for the items in req.body
//     const { title,text } = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     const newFeedback = {
//        title,
//        text,
//      notes_id: uuid(),
//       };

//       readAndAppend(newNotes, './db/db.json');

//     const response = {
//       status: 'success',
//       body: newNotes,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting notes');
//   }
// });

module.exports = notes;