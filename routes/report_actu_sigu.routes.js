const express = require('express');
const router = express.Router();
const controller = require('../controllers/reporte_Actu_sigu.controllers');

router.get('/', controller.getReporteDetalleActiviSiguis);
router.get('/:id', controller.getReporteDetalleActiviSigui);
router.post('/', controller.createReporteDetalleActiviSigui);
router.put('/:id', controller.updateReporteDetalleActiviSigui);
router.delete('/:id', controller.deleteReporteDetalleActiviSigui);

module.exports = router;
