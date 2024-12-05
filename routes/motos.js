var express = require('express');
var router = express.Router();
var Moto = require('../models/bmw').Moto; // Предполагается, что модель называется Moto

// Страница мотоциклов
router.get("/:nick", async function(req, res, next) {
    console.log("Попали сюда");
    console.log(req.params.nick);
    try {
        var mots = await Moto.find({ nick: req.params.nick });
        console.log(mots);

        if (!mots.length) {
            return next(new Error("Нет такого мотоцикла"));
        }

        var moto = mots[0];
        res.render('moto', {
            title: moto.title,
            picture: moto.avatar,
            desc: moto.desc
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;