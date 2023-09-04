const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  id: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
