const express = require('express');
const router = express.Router();
const controller = require('../controllers/areas.controllers');

router.get('/', controller.getAreas);
router.get('/:id', controller.getArea);
router.post('/', controller.createArea);
router.put('/:id', controller.updateArea);
router.delete('/:id', controller.deleteArea);

module.exports = router;
