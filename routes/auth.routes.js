const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/', authController.login); // <-- Este es el que maneja la autenticación

module.exports = router;
