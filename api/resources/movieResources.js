const express = require('express');
const MovieResources = express.Router();
const { MovieController } = require('../controllers');

MovieResources.get('/movie', MovieController.getAllMovies);
MovieResources.get('/movie/:id', MovieController.getMovieById);
MovieResources.post('/movie', MovieController.createMovie);
MovieResources.put('/movie/:id', MovieController.updateMovie);
MovieResources.delete('/movie/:id', MovieController.deleteMovie);

module.exports = MovieResources;