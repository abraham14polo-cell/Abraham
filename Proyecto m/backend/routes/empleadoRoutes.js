const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/empleadoController');

router.get('/', ctrl.listar);
router.post('/', ctrl.insertar);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;