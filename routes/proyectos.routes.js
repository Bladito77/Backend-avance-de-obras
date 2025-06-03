const express = require('express');
const router = express.Router();
const controller = require('../controllers/proyectos.controllers');

router.get('/', controller.getProyectos);
router.get('/:id', controller.getProyecto);
router.post('/', controller.createProyecto);
router.put('/:id', controller.updateProyecto);
router.delete('/:id', controller.deleteProyecto);

module.exports = router;
