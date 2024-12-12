var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', counter:req.session.counter });
  });
  
  
  
/*/* Страница BMW 1000r
router.get('/bmw', function(req, res, next) {
  res.render('moto', {
    title:'BMW 1000r',
    picture:'images/mt1.jpg',
    desc:'BMW S1000 RR  — спортивный мотоцикл (Супербайк) серийного производства BMW Motorrad. На гоночной версии этого мотоцикла ездила команда пилотов BMW Motorrad Motorsport на чемпионате мира по езде на мотоциклах. Мотоцикл был представлен в Мюнхене в апреле 2008 года. Разгон до 100 км/ч происходит за 3,1 с. Максимальная скорость мотоцикла 299 км/ч[1].'
  });
})
  /* Страница Harley davidson 
router.get('/harley', function(req, res, next) {
  res.render('moto', {
    title:'Harley-Davidson',
    picture:'images/mt2.webp',
    desc:'Компания Harley-Davidson известна своим стилем кастомизации, который привёл к появлению мотоциклов в стиле чоппер.[5] Компания традиционно выпускала тяжёлые мотоциклы с воздушным охлаждением в стиле круизер с объёмом двигателя более 700 куб. см, но расширила ассортимент, включив в него более современные платформы VRSC (2002) и мотоциклы среднего веса Street (2014).' 
  });
})
  /* Страница Racer 300 
router.get('/racer', function(req, res, next) {
  res.render('moto', {
    title:'Racer 300',
    picture:'images/mt3.jpg',
    desc:'Racer — российский производитель мотоциклов, скутеров и мопедов. Отличительными характеристиками марки являются экономичность и простота в обслуживании. Для России и стран СНГ техника Racer собирается в Барнауле[1] на бывшей территории Алтайского Моторного Завода из японских, тайваньских, китайских и российских комплектующих[2].' 
  });
});*/
  
module.exports = router;
