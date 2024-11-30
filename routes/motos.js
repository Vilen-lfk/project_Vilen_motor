var express = require('express');
var router = express.Router();
var Moto = require('../models/bmw').Moto;

/* GET users listing. */
router.get("/:nick", async function(req, res, next) {
    var mots = await Moto.find({nick: req.params.nick});
    console.log(mots)
    if(!mots.length) return next(new Error("Нет такого мотоцикла"))
    var moto = mots[0];
    res.render('Moto', {
    title: moto.title,
    picture: moto.avatar,
    desc: moto.desc
    })
    });
    

module.exports = router;