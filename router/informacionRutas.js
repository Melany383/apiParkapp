const express = require('express');
const info = require('../controlador/informacion_parqueaderosControlador');
const router = express.Router();

router.get('/info', info.todoIparqueaderos);


module.exports = router; 