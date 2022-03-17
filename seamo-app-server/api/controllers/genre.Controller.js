const { GenreModel } = require("../models/index");

const createGenre = async (req, res) => {
    const newGenre = GenreModel(req.body);
    const genres = await GenreModel.find({ url: newGenre.url, genre: newGenre.genre }).exec();

    try {
        if(genres.some(genre => genre.url === newGenre.url) || genres.some(genre => genre.genre === newGenre.genre)){
            throw new Error("The genre already exist or the url is already used");
        } else{
            await newGenre.save();
            res.send(newGenre);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getAllGenres = async (req, res) => {
    const genres = await GenreModel.find({});

    try {
        res.send(genres);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getGenreById = async (req, res) => {
    const { id } = req.params;

    try {
        const genre = await GenreModel.findById(id);
        res.send(genre);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateGenre = async (req, res) => {
    const { params: { id }, body } = req;

    try {
        if(body.url === "" || body.genre === ""){
            throw new Error("There is empty data. Please fill everything");
        } else{
            const genre = await GenreModel.findByIdAndUpdate(id, body);
            res.send(body);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteGenre = async (req, res) => {
    const { id } = req.params;

    try {
        const genre = await GenreModel.findByIdAndRemove(id);
        const message = `Genre with id: ${genre} successfully deleted.`;
        res.send(message);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
};