var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchForTags', {title: 'Busca por Tags'});
});

module.exports = router;