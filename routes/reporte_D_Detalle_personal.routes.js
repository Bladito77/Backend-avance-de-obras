const express = require('express');
const router = express.Router();
//const controller = require('../controllers/reporte_D_Detalle_personal.controllers');
const controller = require('../controllers/reporte_D_Detalle_personal.controllers');

router.get('/', controller.getReporteDetallePersonas);
router.get('/:id', controller.getReporteDetallePersona);
router.post('/', controller.createReporteDetallePersona);
router.put('/:id', controller.updateReporteDetallePersona);
router.delete('/:id', controller.deleteReporteDetallePersona);

module.exports = router;
