const modelo = require('../modelo/informacion_parqueaderosModelo');

class informacion_parqueaderosControlador {
    static async todoIparqueaderos(req, res) {
        try {
          const users = await modelo.todoparqueaderos();
          res.json(users);
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al obtener la informacion parqueaderos' });
        }
      }
  }

  module.exports = informacion_parqueaderosControlador;