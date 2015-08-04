var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchForCodigo',{ title: 'Busca por Código'});
});

module.exports = router;