//const pool = require('../config/db');
const ReporteDetaMate = require('../models/repor_detalle_mate');

exports.getReporteDetalleMateriales = async (req, res) => {
  try {
    const materiales = await ReporteDetaMate.findAll();
    res.json(materiales);
  } catch (error) {
    console.error('Error al obtener Detalles de Materiales:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteDetalleMateriales = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_mat');
//   res.json(rows);
// };
exports.getReporteDetalleMaterial = async (req, res) => {
  try {
    const material = await ReporteDetaMate.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Detalle de material no encontrado' });
    res.json(material);
  } catch (error) {
    console.error('Error al obtener Detalle de Material:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteDetalleMaterial = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_detalle_mat WHERE id = ?', [req.params.id]);
//   res.json(rows[0]);
// };

exports.createReporteDetalleMaterial = async (req, res) => {
  const { id_mat, cantidad, proveedor, consecu } = req.body;

  if (!id_mat || !cantidad || !proveedor || !consecu) {
    return res.status(400).json({ error: 'id_mat, cantidad, proveedor y consecu son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteDetaMate.create({
      id_mat,
      cantidad,
      proveedor,
      consecu
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Material:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Material' });
  }
}
// exports.createReporteDetalleMaterial = async (req, res) => {
//   const { id_mat,cantidad,proveedor,consecu } = req.body;
//   if (!id_mat || !cantidad) {
//     return res.status(400).json({ error: 'id_mat y cantidad son obligatorios' });
//   }
//   const [result] = await pool.query(
//     'INSERT INTO reporte_d_detalle_mat (id_mat, cantidad, proveedor, consecu) VALUES (?, ?, ?, ?)',
//     [id_mat, cantidad, proveedor, consecu]
//   );
//   //const [result] = await pool.query('INSERT INTO reporte_d_detalle_mat (id_mat, cantidad, proveedor, consecu) VALUES (?, ?, ?, ?)', [id_mat,cantidad,proveedor,consecu]);
//   res.json({ id: result.insertId, id_mat,cantidad,proveedor,consecu });
// };
exports.updateReporteDetalleMaterial = async (req, res) => {
  const { id_mat, cantidad, proveedor, consecu } = req.body;

  if (!id_mat || !cantidad || !proveedor || !consecu) {
    return res.status(400).json({ error: 'id_mat, cantidad, proveedor y consecu son obligatorios' });
  }

  try {
    const material = await ReporteDetaMate.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Detalle de material no encontrado' });

    material.id_mat = id_mat;
    material.cantidad = cantidad;
    material.proveedor = proveedor;
    material.consecu = consecu;
    await material.save();

    res.json(material);
  } catch (error) {
    console.error('Error al actualizar Detalle de Material:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Detalle de Material ' });
  }
}
// exports.updateReporteDetalleMaterial = async (req, res) => {
//   const { id_mat,cantidad,proveedor,consecu } = req.body;
//   if (!id_mat || !cantidad) {
//     return res.status(400).json({ error: 'id_mat y cantidad son obligatorios' });
//   }
//   //await pool.query('UPDATE reporte_d_detalle_mat SET id_mat=?, cantidad=?, proveedor=?, consecu=? WHERE id=?', [id_mat,cantidad,proveedor,consecu, req.params.id]);
//   await pool.query(
//     'UPDATE reporte_d_detalle_mat SET id_mat=?, cantidad=?, proveedor=?, consecu=? WHERE id=?',
//     [id_mat, cantidad, proveedor, consecu, req.params.id]
//   );
//   res.json({ message: 'Detalle material actualizado' });
// };
exports.deleteReporteDetalleMaterial = async (req, res) => {
  try {
    const material = await ReporteDetaMate.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Detalle de material no encontrado' });

    await material.destroy();
    res.json({ message: 'Detalle de material eliminado' });
  } catch (error) {
    console.error('Error al eliminar Detalle de Material:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Detalle de Material' });
  }
}
// exports.deleteReporteDetalleMaterial = async (req, res) => {
//   await pool.query('DELETE FROM reporte_d_detalle_mat WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Detalle material eliminado' });
// };
