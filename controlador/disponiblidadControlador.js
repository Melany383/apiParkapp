const modelo = require('../modelo/disponibilidadModelo');

class disponibilidadControlador {
    static async todoDisponibilidad(req, res) {
        try {
          const users = await modelo.todoDisponibilidad();
          res.json(users);
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al obtener la disponibilidad' });
        }
      }
  }

  module.exports = disponibilidadControlador;