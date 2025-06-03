const express = require('express');
const router = express.Router();
//const controller = require('../controllers/Deta_maq.controllers');
const controller = require('../controllers/reporte_D_Deta_maq.controllers');

router.get('/', controller.getReporteDetalleEquipos);
router.get('/:id', controller.getReporteDetalleEquipos);
router.post('/', controller.createReporteDetalleEquipo);
router.put('/:id', controller.updateReporteDetalleEquipo);
router.delete('/:id', controller.deleteReporteDetalleEquipo);

module.exports = router;
