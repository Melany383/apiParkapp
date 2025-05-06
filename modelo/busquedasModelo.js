const dbService = require('./bd/Conexion');

class busquedasModelo{
    static async todoBusquedas(pagina = 1) {
        const limite = 50;  // Número máximo de productos por página
        const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
        const query = `SELECT * FROM busquedas ORDER BY id ASC LIMIT ${limite} OFFSET ${offset}`;
        try {
          return await dbService.query(query);
        } catch (err) {
          throw new Error(`Error al obtener la busqueda: ${err.message}`);
        }
      }
}
module.exports = busquedaModelo;