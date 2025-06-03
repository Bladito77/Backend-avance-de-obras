const express = require('express');
const router = express.Router();
//const controller = require('../controllers/reporte_D_Detalle_mate.controllers');
const controller = require('../controllers/reporte_D_Detalle_mate.controllers');

router.get('/', controller.getReporteDetalleMateriales);
router.get('/:id', controller.getReporteDetalleMaterial);
router.post('/', controller.createReporteDetalleMaterial);
router.put('/:id', controller.updateReporteDetalleMaterial);
router.delete('/:id', controller.deleteReporteDetalleMaterial);

module.exports = router;
