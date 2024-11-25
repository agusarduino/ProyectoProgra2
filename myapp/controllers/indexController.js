const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const producto = db.Producto;

const indexController = {
    index: (req, res) => {
        let filtro = {
            include: [
                { association: 'usuario' }
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
    }
};

module.exports = indexController;