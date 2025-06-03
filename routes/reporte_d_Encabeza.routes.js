const express = require('express');
const router = express.Router();
//const controller = require('../controllers/reporte_D_Encabeza.controllers');
const controller = require('../controllers/reporte_D_Encabeza.controllers');

router.get('/', controller.getReporteEncabezados);
router.get('/:id', controller.getReporteEncabezado);
router.post('/', controller.createReporteEncabezado);
router.put('/:id', controller.updateReporteEncabezado);
router.delete('/:id', controller.deleteReporteEncabezado);

module.exports = router;
