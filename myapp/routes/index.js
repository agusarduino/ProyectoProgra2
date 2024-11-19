var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/detalleproducto/:id', indexController.detalle);

router.get('/busqueda', indexController.busqueda);

module.exports = router;
