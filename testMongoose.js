const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Bike = mongoose.model('Motorcycles', { name: String });
const bmw = new Bike({ name: 'BMW1000R' });
bmw.save().then(() => console.log('bmw'));

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Bike = mongoose.model('Motorcycles', { name: String });
var bmw = new Bike({
    title: 'BMW1000R',
    nick: 'BMW1000R', 
    });
bmw.save()//.then(() => console.log('bmw'));*/