const express = require('express');
const router = express.Router();
const controller = require('../controllers/cargos.controllers');

router.get('/', controller.getCargos);
router.get('/:id', controller.getCargo);
router.post('/', controller.createCargo);
router.put('/:id', controller.updateCargo);
router.delete('/:id', controller.deleteCargo);

module.exports = router;
