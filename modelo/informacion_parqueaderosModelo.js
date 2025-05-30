const dbService = require('./bd/Conexion');

class informacion_parqueaderosModelo{
    static async todoparqueaderos(pagina = 1) {
        const limite = 50;  // Número máximo de productos por página
        const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
        const query = `SELECT * FROM  informacion_parqueaderos   ORDER BY id ASC LIMIT ${limite} OFFSET ${offset}`;
        try {
          return await dbService.query(query);
        } catch (err) {
          throw new Error(`Error al obtener la informacion parqueaderos: ${err.message}`);
        }
      }
}
module.exports = informacion_parqueaderosModelo;