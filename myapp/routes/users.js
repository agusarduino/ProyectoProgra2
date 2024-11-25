var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/register', userController.register);
router.post('/register', userController.results);

router.get('/login', userController.login);
router.post('/login', userController.loginUser);

router.get('/perfil/:idUsuario', userController.profile);

router.post("/logout", userController.logout);

module.exports = router;