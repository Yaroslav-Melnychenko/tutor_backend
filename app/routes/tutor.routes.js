module.exports = (app) => {
  const tutors = require('../controllers/tutor.controller.js');

  // Create a new Note
  app.post('/newTutor', tutors.create);

  // Retrieve all Notes
  app.get('/tutors', tutors.findAll);

  // Retrieve a single Note with noteId
  app.get('/tutors/:tutorId', tutors.findOne);

  // Update a tutor with tutorId
  app.put('/tutors/:tutorId', tutors.update);

  // Delete a Note with noteId
  app.delete('/tutors/:tutorId', tutors.delete);

  // Login user by email
  app.post('/login', tutors.login);
}