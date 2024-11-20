const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const producto = db.Producto;

const indexController = {
    index: (req, res) => {
        let filtro = {
            include: [
                {association: 'usuario'}
            ], 
            order: [
                ['createdAt', 'DESC']
            ]
        };

        producto.findAll(filtro)
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
    busqueda: (req, res) => {
        let queryString = req.query.producto;

        producto.findAll({
            where: [
                {nombre: { [op.like]: `%${queryString}%` }}
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then((resultados) => {
                return res.render('searchResults', {producto: resultados})
            })
            .catch((error) => {
                return console.log(error)
            });

    }
};

module.exports = indexController;