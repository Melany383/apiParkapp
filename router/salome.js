const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors'); 
const path =  require('path');
const app =  express();
const indexDia = require('./router/indexDia');  

app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());
app.use('/',indexDia);
app.use(express.json());



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('¡Servidor en funcionamiento!');
  });
  
  // Iniciar el servidor

