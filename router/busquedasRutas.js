const express = require('express');
const buscar = require('../controlador/busquedasControlador');
const router = express.Router();

router.get('/buscar', buscar.todoBusquedas);


module.exports = router; 