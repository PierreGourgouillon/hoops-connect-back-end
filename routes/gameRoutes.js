const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

router.post("/finish", gameController.gameFinish)

module.exports = router;