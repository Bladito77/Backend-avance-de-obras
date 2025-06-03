const express = require('express');
const router = express.Router();
const controller = require('../controllers/equipos.controllers');

router.get('/', controller.getEquipos);
router.get('/:id', controller.getEquipo);
router.post('/', controller.createEquipo);
router.put('/:id', controller.updateEquipo);
router.delete('/:id', controller.deleteEquipo);

module.exports = router;
