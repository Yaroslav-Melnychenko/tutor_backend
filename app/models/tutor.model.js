const mongoose = require('mongoose');

const TutorSchema = mongoose.Schema({
    mail: String,
    password: String,
    firstName: String,
    lastName: String,
    photo: String,
    subjects: Array,
    price: Number,
    places: [
      {lat: Number, lon: Number}
    ],
    score: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutor', TutorSchema);