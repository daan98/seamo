const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    url: {type: String, required: [true, 'Url is required']},
    genre: {type: String, required: [true, 'Genre is required']}
});

const GenreModel = mongoose.model('Genre', genreSchema);

module.exports = GenreModel ;