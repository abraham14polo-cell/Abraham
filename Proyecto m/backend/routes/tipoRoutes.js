const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tipoController');

router.get('/', ctrl.listar);
router.post('/', ctrl.insertar);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;