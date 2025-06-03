const express = require('express');
const router = express.Router();
const controller = require('../controllers/actividades.controllers');

router.get('/', controller.getActividades);
router.get('/:id', controller.getActividad); // Agrega esta si la necesitas
router.post('/', controller.createActividad);
router.put('/:id', controller.updateActividad);
router.delete('/:id', controller.deleteActividad);

module.exports = router;
