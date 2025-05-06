const express = require('express');
const path =  require('path');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("<h1>Trabajo por Salomé</h1>");
});

router.get('/lunes', (req, res) => {
    res.send("Ingles");
});

router.get('/martes', (req, res) => {
    res.send("Bases de datos");
});

router.get('/miercoles', (req, res) => {
    res.send("Frontend");
});

router.get('/jueves', (req, res) => {
    res.send("Razonamiento logico");
});

router.get('/viernes', (req, res) => {
    res.send("Cultura fisica");
});

router.get('/buscar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'buscar.html'));
});
router.get('/modi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'modificar.html'));
});

router.get('/disponible', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'disponible.html'));
});
router.get('/mapas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapas.html'));
});
router.get('/rutas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rutas.html'));
});
router.get('/navegacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'navegacion.html'));
});
router.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'informacion.html'));
});
module.exports = router;
