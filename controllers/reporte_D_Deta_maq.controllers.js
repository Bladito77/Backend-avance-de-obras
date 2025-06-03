//const pool = require('../config/db');
const ReporteDetaMaq = require('../models/repor_deta_maq');

// Obtener todos los detalles de equipos
exports.getReporteDetalleEquipos = async (req, res) => {
  try {
    const detalles = await ReporteDetaMaq.findAll();
    res.json(detalles);
  } catch (error) {
    console.error('Error al obtener Detalles de Equipos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteDetalleEquipos = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_maq');
//   res.json(rows);
// };

// Obtener un detalle de equipo por ID
exports.getReporteDetalleEquipo = async (req, res) => {
  try {
    const detalle = await ReporteDetaMaq.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de equipo no encontrado' });
    res.json(detalle);
  } catch (error) {
    console.error('Error al obtener Detalle de Equipo:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
} 
// exports.getReporteDetalleEquipo = async (req, res) => {
//   try {
//     const detalle = await ReporteDetaMaq.findByPk(req.params.id);
//     if (!detalle) return res.status(404).json({ error: 'Detalle de equipo no encontrado' });
//     res.json(detalle);
//   } catch (error) {
//     console.error('Error al obtener Detalle de Equipo:', error);
//     res.status(500).json({ error: 'Error del servidor' });
//   }
// }
// exports.getReporteDetalleEquipo = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_maq WHERE id = ?', [req.params.id]);
//   res.json(rows[0]);
// };

// Crear un nuevo detalle de equipo
exports.createReporteDetalleEquipo = async (req, res) => {
  const { id_maqu, cantidad, proveedor, consecu } = req.body;

  if (!id_maqu || !cantidad || !proveedor || !consecu) {
    return res.status(400).json({ error: 'id_maqu, cantidad, proveedor y consecu son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteDetaMaq.create({
      id_maqu,
      cantidad,
      proveedor,
      consecu
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Equipo:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Equipo' });
  }
};
// exports.createReporteDetalleEquipo = async (req, res) => {
//   const { id_maqu, cantidad, proveedor, consecu } = req.body;

//   if (!id_maqu || !cantidad) {
//     return res.status(400).json({ error: 'id_maqu y cantidad son obligatorios' });
//   }

//   const [result] = await pool.query(
//     'INSERT INTO reporte_d_detalle_maq (id_maqu, cantidad, proveedor, consecu) VALUES (?, ?, ?, ?)',
//     [id_maqu, cantidad, proveedor, consecu]
//   );

//   res.json({ id: result.insertId, id_maqu, cantidad, proveedor, consecu });
// };

// Actualizar un detalle de equipo existente
exports.updateReporteDetalleEquipo = async (req, res) => {
  const { id_maqu, cantidad, proveedor, consecu } = req.body;

  if (!id_maqu || !cantidad || !proveedor || !consecu) {
    return res.status(400).json({ error: 'id_maqu, cantidad, proveedor y consecu son obligatorios' });
  }

  try {
    const detalle = await ReporteDetaMaq.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de equipo no encontrado' });

    detalle.id_maqu = id_maqu;
    detalle.cantidad = cantidad;
    detalle.proveedor = proveedor;
    detalle.consecu = consecu;
    await detalle.save();

    res.json(detalle);
  } catch (error) {
    console.error('Error al actualizar Detalle de Equipo:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Detalle de Equipo' });
  }
};
// exports.updateReporteDetalleEquipo = async (req, res) => {
//   const { id_maqu, cantidad, proveedor, consecu } = req.body;

//   if (!id_maqu || !cantidad) {
//     return res.status(400).json({ error: 'id_maqu y cantidad son obligatorios' });
//   }

//   await pool.query(
//     'UPDATE reporte_d_detalle_maq SET id_maqu=?, cantidad=?, proveedor=?, consecu=? WHERE id=?',
//     [id_maqu, cantidad, proveedor, consecu, req.params.id]
//   );

//   res.json({ message: 'Detalle de equipo actualizado' });
// };

// Eliminar un detalle de equipo
exports.deleteReporteDetalleEquipo = async (req, res) => {
  try {
    const detalle = await ReporteDetaMaq.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de equipo no encontrado' });

    await detalle.destroy();
    res.json({ message: 'Detalle de equipo eliminado' });
  } catch (error) {
    console.error('Error al eliminar Detalle de Equipo:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Detalle de Equipo' });
  }
};
// exports.deleteReporteDetalleEquipo = async (req, res) => {
//   await pool.query('DELETE FROM reporte_d_detalle_maq WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Detalle de equipo eliminado' });
// };
