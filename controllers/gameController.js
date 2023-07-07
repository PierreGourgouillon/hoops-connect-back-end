const gameEnums = require('../enums/GameEnum')
const Game = require("../models/gameModel");

exports.gameFinish = async (req, res, next) => {
    for (const param in req.body) {
        switch (param) {
            case 'date':
                break;
            case 'score':
                break;
            case 'deviceId':
                break;
            case 'difficulty':
                break;
            case 'duration':
                break;
            case 'mode':
                break;
            default:
                return res.status(400).json({
                    error: "MALFORMED_JSON",
                    data: null
                });
        }
    }

    const { difficulty, mode } = req.body

    try {
        gameEnums.gameDifficultyEnum(difficulty)
        gameEnums.gameModeEnum(mode)
    } catch (error) {
        return res.status(400).json({
            error: "NOT_VALID_TYPE",
            data: null
        });
    }

    const game = new Game({
        ...req.body,
        playerId: req.user.firebaseId
    })

    try {
        const gameResponse = await game.save()
        res.status(201).json({
            error: null,
            data: gameResponse
        });
    } catch (error) {
        res.status(500).json({
            error: "INTERNAL_ERROR",
            data: null
        });
    }
}