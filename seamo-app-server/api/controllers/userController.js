const { UserModel } = require('../models');

const getUsers = async (req, res) => {
    try {
        const user = await UserModel.find({});
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createUser = async (req, res) => {
    const newUser = new UserModel(req.body);
    const users = await UserModel.find({ name: newUser.name }).exec();

    try {
        if(users.some(user => user.name === newUser.name )){
            throw new Error("this user already exist, please choose other name.");
        } else{
            await newUser.save();
            res.send(newUser);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateUser = async (req, res) => {
    const { params: { id }, body} = req;

    try {
        if(body.name === "" || body.password === "" || body.img === ""){
            throw new Error("There are some missing data, ensure everything is filled.");
        } else{
            const user = await UserModel.findByIdAndUpdate(id, body);
            res.send(user);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findByIdAndRemove(id);
        const message = `User with id: ${id} successfully deleted.`;
        res.send(message);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};