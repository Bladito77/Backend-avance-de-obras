const express = require('express');
const router = express.Router();
const { guardarReporteCompleto } = require('../controllers/reportes.controller');

router.post('/', guardarReporteCompleto);

module.exports = router;
