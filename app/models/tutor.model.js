const mongoose = require('mongoose');

const TutorSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },
    password: String,
    firstName: String,
    lastName: String,
    photo: String,
    subjects: Array,
    levels: Array,
    description: Array,
    languages: Array,
    price: Number,
    place: { lat: Number, lng: Number },
    score: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutor', TutorSchema);