const modelo = require('../modelo/busquedasModelo');

class busquedasControlador {
    static async todoBusquedas(req, res) {
        try {
          const users = await modelo.todoBusquedas();
          res.json(users);
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al obtener la busqueda' });
        }
      }
  }

  module.exports = busquedasControlador;