var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('edit', {hiddenCodigo: req.body.hiddenCodigo, versao: req.body.versao});
});

router.post('/', function(req, res, next){
    res.render('edit', {hiddenCodigo: req.body.hiddenCodigo, versao: req.body.versao});
});

module.exports = router;