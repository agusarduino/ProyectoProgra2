const db = require('../database/models');

const producto = db.Producto;

const indexController = {
    index: (req, res) => {
        producto.findAll()
            .then((producto) => {
                res.render('index', { producto: producto });
            })
            .catch((error) => {
                console.log(error)
            })
    },
    detalle: (req, res) => {
        let productoEncontradoId = req.params.id;

        producto.findByPk(productoEncontradoId)
          .then((producto) => {
            return res.render('product', {producto: producto})
          })
          .catch(function(error) {
            return console.log(error);
           })
    },
};

module.exports = indexController;