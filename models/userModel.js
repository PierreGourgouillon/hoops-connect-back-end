const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firebaseId: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    pseudo: { type: String, require: true, unique: true },
    sex: { type: String, require: true }
})

module.exports = mongoose.model("User", userSchema);