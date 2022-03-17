const express = require('express');
const UserResources = express.Router();
const { UserController } = require('../controllers');

UserResources.get('/user', UserController.getUsers);
UserResources.get('/user/:id', UserController.getUserById);
UserResources.post('/user/:id', UserController.createUser);
UserResources.put('/user/:id', UserController.updateUser);
UserResources.delete('/user/:id', UserController.deleteUser);

module.exports = UserResources;