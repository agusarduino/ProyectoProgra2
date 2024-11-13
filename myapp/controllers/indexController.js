const db = require('../database/models');

const producto = db.Producto;

const indexController = {
    index: (req, res) => {
        res.render('index')
    },
    detalle: (req, res) => {
        let productoEncontradoId = req.params.id;

        producto.findByPk(productoEncontradoId)
          .then((producto) => {
            return res.render('productAdd', {producto: producto})
          })
          .catch(function(error) {
            return console.log(error);
           })
    }
};

module.exports = indexController;