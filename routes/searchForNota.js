var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchForNota',{ title: 'Busca por Nota'});
});

module.exports = router;