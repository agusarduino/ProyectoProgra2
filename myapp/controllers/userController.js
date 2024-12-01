const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const op = db.Sequelize.Op;


const userController = {
    register: (req, res) => {
        if (req.session.user != undefined) {
            return res.redirect('/')
        }
        if (req.query.error) {
            return res.render('register', { title: 'Registración', error: true, message: 'El nombre de usuario o email ya existe' });
        } else {
            return res.render('register', { title: 'Registración', error: false, message: 'El nombre de usuario o email ya existe' });
        }
    },
    results: (req, res) => {
        let form = req.body;

        if (!form.email) {
            return res.send('El campo "email" no puede estar vacío.');
        } else if (!form.contrasena) {
            return res.send('El campo "contraseña" no puede estar vacío.');
        } else if (!form.nombre) {
            return res.send('El campo "nombre" no puede estar vacío.');
        }

        db.Usuario.findOne({ where: { email: form.email } })
            .then(function (results) {
                if (results) {

                    return res.send('El email ingresado ya está registrado. Intente con otro.');
                }

                form.contrasena = bcryptjs.hashSync(req.body.contrasena, 10);

                return db.Usuario.create(form);
            })
            .then(function () {
                return res.redirect("/users/login");
            })
            .catch(function (err) {
                console.log("Error al registrar el usuario:", err);
                return res.send("Hubo un problema al registrar el usuario.");
            });
    },


    login: (req, res) => {
        if (req.session.user != undefined) {
            return res.redirect('/')
        };
        return res.render("login")

    },
    loginUser: (req, res) => {
        let form = req.body;
        let filtrado = {
            where: { email: form.email }
        }
        db.Usuario.findOne(filtrado)
            .then(function (result) {
                if (!result) {
                    return res.send("No hay un usuario con este mail")
                } else {
                    let check = bcryptjs.compareSync(form.contrasena, result.contrasena)
                    if (check) {
                        req.session.user = result.dataValues;
                        return res.redirect("/");
                    } else {
                        return res.send("La contraseña es incorrecta")
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/");
    },

    profile: function (req, res) {
        let id = req.params.idUsuario;


        let filtro = {
            include: [{ association: "productos" }]
        };

        db.Usuario.findByPk(id, filtro)
            .then(function (results) {
                return res.render("profile", { results: results });
            })
            .catch(function (err) {
                console.log(err);
            });
    }
};

module.exports = userController;