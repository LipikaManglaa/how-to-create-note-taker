const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notesRoute.js');


const appNotes = express();

appNotes.use('/notes', notesRouter);


module.exports = appNotes;
