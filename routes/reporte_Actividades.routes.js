const express = require('express');
const router = express.Router();
//const controller = require('../controllers/reporte_Actividades.controllers');
const controller = require('../controllers/reporte_Actividades.controllers');

router.get('/', controller.getReporteDetalleActividades);
router.get('/:id', controller.getReporteDetalleActividad);
router.post('/', controller.createReporteDetalleActividad);
router.put('/:id', controller.updateReporteDetalleActividad);
router.delete('/:id', controller.deleteReporteDetalleActividad);

module.exports = router;
