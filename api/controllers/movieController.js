const {MovieModel} = require("../models");

const createMovie = async (req, res) => {
    const newMovie = new MovieModel(req.body);
    const movies = await MovieModel.find({name: newMovie.name, url: newMovie.url, recent: newMovie.recent, genre: newMovie.genre, guest: newMovie.guest, description: newMovie.description, trailer: newMovie.trailer }).exec();

    try {
        if(movies.some(movie => movie.name === newMovie.name) && movies.some(movie => movie.description === newMovie.description)){
            throw new Error('The movie already exist.');
        } else{
            await newMovie.save();
            res.send(newMovie);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getAllMovies = async (req, res) => {
    const movies = await MovieModel.find({});
    
    try {
        res.send(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getMovieById = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await MovieModel.findById(id);
        res.send(movie)
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateMovie = async (req, res) => {
    const {params: { id }, body } = req;

    try {
        if(body.name === '' || body.url === '' || body.description === '' || body.trailer === '' || body.wiki === '' || body.wikiLang === '' || body.bitDescription === '' ){
            throw new Error('Please, ensure all field are filled');
        } else{
            const movie = await MovieModel.findByIdAndUpdate(id, body);
            res.send(body);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await MovieModel.findByIdAndRemove(id);
        const message = { message: `id: ${id} successfully deleted` };
        res.send(message);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};