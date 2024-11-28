const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({name : String})

schema.methods.meow = function(){
    console.log(this.name + " летит 350км/ч")
    }
    
const Bike = mongoose.model('Motorcycles', schema);
const bmw = new Bike({ name: 'BMW1000R' });
bmw.save().then(() => bmw.meow());

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Bike = mongoose.model('Motorcycles', { name: String });
var bmw = new Bike({
    title: 'BMW1000R',
    nick: 'BMW1000R', 
    });
bmw.save()//.then(() => console.log('bmw'));*/