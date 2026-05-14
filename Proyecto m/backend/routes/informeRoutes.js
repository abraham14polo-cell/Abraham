const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/informeController');

router.get('/contratos',          ctrl.contratos);
router.get('/pagoscontrato',      ctrl.pagosContrato);
router.get('/mantenimientos',     ctrl.mantenimientos);
router.get('/pagosmantenimiento', ctrl.pagosMantenimiento);
router.get('/apartamentos',       ctrl.apartamentos);

module.exports = router;