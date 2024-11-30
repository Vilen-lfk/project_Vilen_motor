const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

/*var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
    console.log(this.name + " Едет 350")
    }
    
const Moto = mongoose.model('Moto', schema);
const bmw = new Moto({ name: 'BMW1000R' });
bmw.save().then(() => bmw.meow());*/


var Moto = require('./models/bmw.js').Moto
var moto = new Moto({
title: "BMW1000r",
nick: "1000r",
})
moto.save();
