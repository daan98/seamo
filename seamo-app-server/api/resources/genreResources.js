const express = require('express');
const GenreResources = express.Router();
const { GenreController } = require('../controllers');

GenreResources.get('/genre', GenreController.getAllGenres);
GenreResources.get('/genre/:id', GenreController.getGenreById);
GenreResources.post('/genre', GenreController.createGenre);
GenreResources.put('/genre/:id', GenreController.updateGenre);
GenreResources.delete('/genre/:id', GenreController.deleteGenre);

module.exports = GenreResources;