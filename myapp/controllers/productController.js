const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const producto = db.Producto;

const productController = {
    detalle: (req, res) => {
        let productoEncontradoId = req.params.id;

        let filtro = {
            include: [
                { association: 'usuario' }
            ]
        };

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
            ],
            include: [
                { association: 'usuario' }
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

        if (!form.urlImagen) {
            return res.send('El campo "URL de la imagen" no puede estar vacío.');
        } else if (!form.nombre) {
            return res.send('El campo "Nombre" no puede estar vacío.');
        } else if (!form.descripcion) {
            return res.send('El campo "Descripción" no puede estar vacío.');
        }; 

        form.id_usuario = req.session.user.id;

        let filtro = {
            where: {
                id: form.id
            }
        };

        producto.create(form, filtro)
            .then((result) => {
                return res.redirect("/")
            }).catch((err) => {
                return console.log(err);

            });
    }
};

module.exports = productController;