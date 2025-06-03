const express = require('express');
const router = express.Router();
const controller = require('../controllers/empleados.controllers');

router.get('/', controller.getEmpleados);
router.get('/:id', controller.getEmpleado);
router.post('/', controller.createEmpleado);
router.put('/:id', controller.updateEmpleado);
router.delete('/:id', controller.deleteEmpleado);

module.exports = router;
