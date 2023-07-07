const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    id: { type: String, require: true, unique: true },
    date: { type: String, require: true },
    score: { type: Number, require: true },
    playerId: { type: String, require: true },
    deviceId: { type: String, require: true },
    difficulty: { type: String, require: true },
    duration: { type: Number, require: true },
    mode: { type: String, require: true }
})

module.exports = mongoose.model("Game", gameSchema);