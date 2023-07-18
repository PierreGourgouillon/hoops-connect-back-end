const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

router.post("/finish", gameController.gameFinish)
router.get("/", gameController.getAllGames)
module.exports = router;