const User = require('../models/userModel');

exports.registerUser = async (req, res, next) => {
    try {
        const isPseudoExist = await User.countDocuments({ pseudo: req.body.pseudo }) <= 0 ? false : true

        if (isPseudoExist) {
            return res.status(409).json({
                error: "PSEUDO_EXIST",
                data: null
            })
        }

        const user = new User({
            ...req.body,
            firebaseId: req.user.firebaseId
        })

        await user.save()
        res.status(201).json({
            error: null,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            error: "INTERNAL_ERROR",
            data: null
        });
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ firebaseId: req.user.firebaseId })

        res.status(201).json({
            error: null,
            data: user
        });
    } catch (error) {
        res.status(400).json({
            error: "NOT_FOUND",
            data: null
        });
    }
}