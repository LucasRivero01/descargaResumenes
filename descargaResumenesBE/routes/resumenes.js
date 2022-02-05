const { Router } = require('express');
const { consultaResumen } = require('../controllers/resumenes');


const router = Router();
router.get('/consultar/:dniNumero/:fechaVto', consultaResumen);


module.exports = router;