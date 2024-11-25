const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const op = db.Sequelize.Op;

const userController = {
    register: (req, res) => {
        if (req.session.usuarioLogueado != undefined) {
            return res.redirect("/");
        }
        if (req.query.error) {
            return res.render('register', { title: 'Registración', error: true, message: 'El nombre de usuario o email ya existe' });
        } else {
            return res.render('register', { title: 'Registración', error: false, message: 'El nombre de usuario o email ya existe' });
        }
    },

    login: (req, res) => {
        return res.render("login")
    },
    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where: {
                email: form.email
            }
        }

        db.Usuario.findOne(filtro)
            .then((result) => {

                if (result != undefined) {

                    let validarClave = bcryptjs.compareSync(form.password, result.contrasena);

                    if (validarClave) {
                        req.session.user = result.dataValues;

                        return res.redirect("/");
                    } else {
                        return res.send("Clave incorrecta");
                    }

                } else {
                    return res.send("No se encontró un usuario");
                }
            }).catch((err) => {
                return console.log(err);

            })

    },
    registroSubmit: function (req, res) {
        if (req.session.usuarioLogueado != undefined) {
            return res.redirect("/");
        }
        db.Usuario.findOne({
            where: {
                [op.or]: [
                    { email: req.body.email },
                    { nombre: req.body.nombre }
                ]
            }
        })
            .then(function (usuario) {
                if (req.body.email == "") {
                    res.render('registro', { title: 'Registración', error: true, message: 'El email no puede estar vacio' });
                } else if (req.body.password == "") {
                    return res.render('registro', { title: 'Registración', error: true, message: 'La contraseña no puede estar vacia' });
                } else if (usuario != null) {
                    return res.render('registro', { title: 'Registración', error: true, message: 'Este nombre de usuario o el email ya existe. Elije otro.' });
                } else if (usuario == null) {
                    let password = bcrypt.hashSync(req.body.contrasena, 10);

                    db.Usuario.create({
                        nombre: req.body.nombre,
                        email: req.body.email,
                        password: password,
                    })
                        .then(function (data) {
                            console.log(data)
                            res.redirect('/login')
                        })
                } else {
                    return res.redirect('/usuario/registro?error=true');
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    },
    results: (req, res) => {
        /* let qs = req.query.email; */

        let form = req.body;
        let pass = bcryptjs.hashSync(form.password, 10);

        form.password = pass;

        db.Usuario.create(form)
            .then((result) => {
                return res.redirect("/users/login")
            })
            .catch((err) => {
                return console.log(err);
            });
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/");
    }
}

module.exports = userController;