const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    id: { type: String, require: true, unique: true },
    date: { type: String, require: true, unique: true },
    score: { type: Number, require: true, unique: true },
    playerId: { type: String, require: true, unique: true },
    deviceId: { type: String, require: true, unique: true },
    difficulty: { type: String, require: true, unique: true },
    duration: { type: Number, require: true, unique: true },
    mode: { type: String, require: true, unique: true }
})

module.exports = mongoose.model("Game", gameSchema);