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
    description: req.body.description,
    languages: req.body.languages,
    price: req.body.price,
    place: req.body.place,
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

// Find a single tutor with a tutorId
exports.findOne = (req, res) => {
  Tutor.findById(req.params.tutorId)
    .then(tutor => {
        if(!tutor) {
            return res.status(404).send({
                message: "Tutor not found with id " + req.params.tutorId
            });            
        }
        res.send(tutor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tutor not found with id " + req.params.tutorId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving tutor with id " + req.params.tutorId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};

// Login user with email in request
exports.login = (req, res) => {
    Tutor.findOne({email: mail})
    .then(tutors => {
        res.send(tutors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutor."
        });
    });
}