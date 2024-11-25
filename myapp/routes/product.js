var express = require('express');
var router = express.Router();


const productController = require('../controllers/productController');

router.get('/detalleproducto/:id', productController.detalle);

router.get('/busqueda', productController.busqueda);

router.get('/agregarProducto', productController.createForm);

router.post('/agregarProducto', productController.saveForm);



module.exports = router;