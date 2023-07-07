const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    authMiddleware = require('./middlewares/auth'),
    authRoutes = require('./routes/authRoutes'),
    gameRoutes = require('./routes/gameRoutes'),
    connectionMongoDB = require('./mongoDB/connection'),
    app = express();

connectionMongoDB()

app.use(cors());
app.use(bodyParser.json())

app.use('/api/auth', authMiddleware, authRoutes);
app.use('/api/games', authMiddleware, gameRoutes);

module.exports = app;