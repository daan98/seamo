const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {type: String, required: [true, 'name is required']},
    password: {type: String, required: [true, 'password is required']},
    image: {type: String}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel ;