const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'name field is required.']},
    url: {type: String, required: [true, 'url field is required']},
    recent: {type: Boolean, required: [true, 'recent field is required.']},
    genre: {type: Array, required: [true, 'genre field is required.']},
    guest: {type: Array, required: [true, 'guest field is required.']},
    description: {type: String, required: [true, 'description field is required.']},
    trailer: {type: String, required: [true, 'trailer field is required']},
    wiki: {type: String, required: [true, 'wiki field is required']},
    wikiLang : {type: String, required: [true, 'wikiLang field is required']},
    bitDescription: {type: String, required: [true, 'bitDescription is required']}
});

const MovieModel = mongoose.model('Movie', movieSchema);

module.exports = MovieModel ;