const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res) => {
        return res.render("register")
    },
    
    login: (req, res) => {
        const { email, password } = req.body;
        let errors = [];
        if (!email) {
            errors.push('El email es obligatorio.');
        }
        else if (!password) {
            errors.push('La contraseña es obligatoria.');
        }
        if (errors.length > 0) {
            return res.render('login', {
                errors,
                email,
                password
            });
        }
    },
    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where: {
                email: form.email
            }
        };

    },
    results: (req, res) => {
        /* let qs = req.query.email; */

        let form = req.body;
        let pass = bcryptjs.hashSync(form.password, 10);

        form.password = pass;

        db.User.create(form)
            .then((result) => {
                return res.redirect("/users/login")
            })
            .catch((err) => {
                return console.log(err);
            });
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/movies/");
    }
}

module.exports = userController;