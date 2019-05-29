const mongoose = require('mongoose');

const TutorSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        select: false
    },
    firstName: String,
    lastName: String,
    photo: String,
    phone: String,
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