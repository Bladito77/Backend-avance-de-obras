//const pool = require('../config/db');
const ReporteDetaPersona = require('../models/repor_detalle_personal');

exports.getReporteDetallePersonas = async (req, res) => {
  try {
    const personas = await ReporteDetaPersona.findAll();
    res.json(personas);
  } catch (error) {
    console.error('Error al obtener Detalles de Personas:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteDetallePersonas = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_personal');
//   res.json(rows);
// };
exports.getReporteDetallePersona = async (req, res) => {
  try {
    const persona = await ReporteDetaPersona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ error: 'Detalle de persona no encontrado' });
    res.json(persona);
  } catch (error) {
    console.error('Error al obtener Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteDetallePersona = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_personal WHERE id = ?', [req.params.id]);
//   res.json(rows[0]);
// };
exports.createReporteDetallePersona = async (req, res) => {
  const { cedula, consecu } = req.body;

  if (!cedula || !consecu) {
    return res.status(400).json({ error: 'cedula y consecu son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteDetaPersona.create({
      cedula,
      consecu
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Persona' });
  }
}
// exports.createReporteDetallePersona = async (req, res) => {
//   const { cedula,consecu } = req.body;
//   const [result] = await pool.query('INSERT INTO reporte_d_detalle_personal (cedula, consecu) VALUES (?, ?)', [cedula, consecu]);
//   res.json({ id: result.insertId, cedula, consecu });
// };
exports.updateReporteDetallePersona = async (req, res) => {
  const { cedula, consecu } = req.body;

  if (!cedula || !consecu) {
    return res.status(400).json({ error: 'cedula y consecu son obligatorios' });
  }

  try {
    const detalle = await ReporteDetaPersona.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de persona no encontrado' });

    detalle.cedula = cedula;
    detalle.consecu = consecu;
    await detalle.save();

    res.json(detalle);
  } catch (error) {
    console.error('Error al actualizar Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Detalle de Persona' });
  }
}
// exports.updateReporteDetallePersona = async (req, res) => {
//   const { cedula,consecu } = req.body;
//   await pool.query('UPDATE reporte_d_detalle_personal SET cedula=?, consecu=? WHERE id=?', [cedula,consecu, req.params.id]);
//   res.json({ message: 'Detalle Persona actualizado' });
// };
exports.deleteReporteDetallePersona = async (req, res) => {
  try {
    const detalle = await ReporteDetaPersona.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de persona no encontrado' });

    await detalle.destroy();
    res.json({ message: 'Detalle Persona eliminado' });
  } catch (error) {
    console.error('Error al eliminar Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Detalle de Persona' });
  }
}

// exports.deleteReporteDetallePersona = async (req, res) => {
//   await pool.query('DELETE FROM reporte_d_detalle_personal WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Detalle Persona eliminado' });
// };
