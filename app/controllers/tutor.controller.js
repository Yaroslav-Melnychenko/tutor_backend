const Tutor = require('../models/tutor.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  // if(!req.body.content) {
  //   return res.status(400).send({
  //       message: "Note content can not be empty"
  //   });
  // }

  console.log(req.body);

  // Create a Tutor //пока без валидации
  const tutor = new Tutor({
    mail: req.body.mail,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photo: req.body.photo,
    subjects: req.body.subjects,
    levels: req.body.levels,
    languages: req.body.languages,
    price: req.body.price,
    places: req.body.places,
    score: req.body.score
  });

  // Save Tutor in the database
  tutor.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
    });
  });
};

// Retrieve and return all tutors from the database.
exports.findAll = (req, res) => {
  Tutor.find()
    .then(tutors => {
        res.send(tutors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutors."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};