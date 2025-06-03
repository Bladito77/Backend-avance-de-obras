const express = require('express');
const router = express.Router();
const controller = require('../controllers/materiales.controllers');

router.get('/', controller.getMateriales);
router.get('/:id', controller.getmaterial);
router.post('/', controller.creatematerial);
router.put('/:id', controller.updatematerial);
router.delete('/:id', controller.deletematerial);

module.exports = router;
