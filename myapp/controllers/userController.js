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
    results: (req, res) => {
            let form = req.body;

            if (!form.email) {
                return res.send('El campo "email" no puede estar vacío.'); 
            } else if (!form.contrasena) {
                return res.send('El campo "contraseña" no puede estar vacío.'); 
            } else if (!form.user) {
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
    










        /* let qs = req.query.email; 

        let form = req.body;
        let pass = bcryptjs.hashSync(form.contrasena, 10);

        form.contrasena = pass;

        db.Usuario.create(form)
            .then((result) => {
                return res.redirect("/users/login")
            })
            .catch((err) => {
                return console.log(err);
            });
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
                } else if (req.body.contrasena == "") {
                    return res.render('registro', { title: 'Registración', error: true, message: 'La contraseña no puede estar vacia' });
                } else if (usuario != null) {
                    return res.render('registro', { title: 'Registración', error: true, message: 'Este nombre de usuario o el email ya existe. Elije otro.' });
                } else if (usuario == null) {
<<<<<<< HEAD
                    let password = bcrypt.hashSync(req.body.contrasena, 10);

                    db.Usuario.create({
                        nombre: req.body.nombre,
                        email: req.body.email,
                        password: password,
=======
                    let contrasena = bcrypt.hashSync(req.body.contrasena, 10);

                    db.Usuario.create({
                        nombre: req.body.usuario,
                        email: req.body.correo,
                        contrasena: contrasena,
>>>>>>> 9c002e35da3ff19e75f02c85a28f168c08361b0d
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
            })*/

    login: (req, res) => {
        return res.render("login")
    },
    loginUser: (req, res) => {
        let form = req.body;
        let filtrado = {
            where: {email: form.email}
        }
        db.Usuario.findOne(filtrado)
        .then(function (result) {
            if (!result){
                return res.send("No hay un usuario con este mail")
            }else{
                let check = bcryptjs.compareSync(form.contrasena,result.contrasena) 
                if (check) {
                    req.session.user = result.dataValues; 
                    
                    return res.redirect("/");
                } else{
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
    }

    /*
    profile: function (req, res) {
        let id = req.params.id;
    
        db.Usuario.findByPk(id, {
            include: [{ association: "productos" }]
        })
        .then(function (results) {
            return res.render("profile", { lista: results });
        })
        .catch(function (err) {
            console.log(err);
        });
    }*/
}

module.exports = userController;