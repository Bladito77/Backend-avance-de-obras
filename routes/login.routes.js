const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.controllers');

//router.post('/', authController.login); // <-- Este es el que maneja la autenticación

router.get('/', controller.getLogins);
router.get('/:id', controller.getLogin);
router.post('/', controller.createLogin);
router.put('/:id', controller.updateLogin);
router.delete('/:id', controller.deleteLogin);

module.exports = router;
