var Moto = require("../models/bmw").Moto


module.exports = async function(req,res,next){
res.locals.nav = []

var menu = await Moto.find(null,{_id:0,title:1,nick:1});
console.log(menu);
if (menu.length) {
res.locals.nav = menu;
}
next();
}
/*var Motorcycles = require("../models/bmw").Motorcycles;

module.exports = async function(req, res, next) {
    res.locals.nav = [];
    try {
        var menu = await Motorcycles.find(null, { _id: 0, title: 1, nick: 1 });
        console.log(menu);
        if (menu.length !== 0) {
            res.locals.nav = menu;
        }
    } catch (err) {
        console.error("Database query error:", err);
    }
    next();
};*/

