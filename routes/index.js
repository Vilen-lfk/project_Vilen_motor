var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница BMW 1000r*/
router.get('/bmw', function(req, res, next) {
  res.send("<h1>Страница BMW 1000r</h1>")
  });
  /* Страница Harley davidson */
router.get('/harley', function(req, res, next) {
  res.send("<h1>Страница Harley davidson</h1>")
  });
  /* Страница Racer 300 */
router.get('/racer', function(req, res, next) {
  res.send("<h1>Страница Racer 300</h1>")
  });
  
module.exports = router;
