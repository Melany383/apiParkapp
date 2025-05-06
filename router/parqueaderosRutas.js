const express = require('express');
const parqeo = require('../controlador/disponiblidadControlador');
const router = express.Router();

router.get('/disponibilidad', parqeo.todoDisponibilidad);


module.exports = router; 