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
    },
    detalle: (req, res) => {
        let productoEncontradoId = req.params.id;

        let filtro = {include: [
            { association: 'usuario' }
        ]};

        producto.findByPk(productoEncontradoId, filtro)
            .then((producto) => {
                return res.render('product', { producto: producto })
            })
            .catch(function (error) {
                return console.log(error);
            })
    },
    busqueda: (req, res) => {
        let queryString = req.query.producto;

        producto.findAll({
            where: [
                { nombre: { [op.like]: `%${queryString}%` } }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then((resultados) => {
                return res.render('searchResults', { producto: resultados })
            })
            .catch((error) => {
                return console.log(error)
            });

    },
    createForm: (req, res) => {
        if (req.session.user != undefined) {
            return res.redirect("/");
        };

        let id = req.query.id;

        producto.findByPk(id)
            .then((producto) => {
                return res.render('productAdd', { producto: producto })
            })
            .catch((error) => {
                return console.log(error)
            });
    },
    saveForm: (req, res) => {
        let form = req.body;

        let filtro = {
            where: {
                id: form.id
            }
        }

        producto.update(form, filtro)
            .then((result) => {
                return res.redirect("/detalleproducto/" + form.id)
            }).catch((err) => {
                return console.log(err);

            });
    }
};

module.exports = indexController;