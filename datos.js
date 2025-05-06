const express = require('express');
const cors = require('cors');
const path = require('path');
const parque = require('./router/parqueaderosRutas');
const info = require('./router/informacionRutas');
const buscar = require('./router/busquedasRutas');
const nave = require('./router/navegacionRutas');
const ruta = require('./router/rutas');
const mapa = require('./router/mapasRutas');
const app = express();
const PORT = process.env.PORT || 4545;


// Middleware
app.use(cors({
  origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true // Habilita el envío de credenciales si es necesario
}));

// Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de productos
app.use('/', parque);
app.use('/', info);
app.use('/', buscar);
app.use('/', nave);
app.use('/', ruta);
app.use('/', mapa);
// Middleware de manejo de errores




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});