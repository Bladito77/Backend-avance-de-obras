//const pool = require('../config/db');
const ReporteActiSigui = require('../models/repor_acti_sigu');

// Obtener todos los detalles de actividad
exports.getReporteDetalleActiviSiguis = async (req, res) => {
  try {
    const actividades = await ReporteActiSigui.findAll();
    res.json(actividades);
  } catch (error) {
    console.error('Error al obtener Detalles de Actividades:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
// exports.getReporteDetalleActiviSiguis = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM report_activ_sigu');
//   res.json(rows);
// };

// Obtener un detalle de actividad por ID
exports.getReporteDetalleActiviSigui = async (req, res) => {
  try {
    const actividad = await ReporteActiSigui.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Detalle de actividad no encontrado' });
    res.json(actividad);
  } catch (error) {
    console.error('Error al obtener Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
// exports.getReporteDetalleActiviSigui = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM report_activ_sigu WHERE id = ?', [req.params.id]);
//   res.json(rows[0]);
// };

// Crear un nuevo detalle de actividad
exports.createReporteDetalleActiviSigui = async (req, res) => {
  const { id_descr_acti, cantidad, consecu } = req.body;

  if (!id_descr_acti) {
    return res.status(400).json({ error: 'id_descr_acti son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteActiSigui.create({
      id_descr_acti,
      cantidad,
      consecu
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Actividad' });
  }
}
// exports.createReporteDetalleActiviSigui = async (req, res) => {
//   const { id_descr_acti, cantidad, consecu } = req.body;

//   if (!id_descr_acti || !cantidad) {
//     return res.status(400).json({ error: 'id_descr_acti y cantidad son obligatorios' });
//   }

//   const [result] = await pool.query(
//     'INSERT INTO report_activ_sigu (id_descr_acti, cantidad, consecu) VALUES (?, ?, ?)',
//     [id_descr_acti, cantidad, consecu]
//   );

//   res.json({ id: result.insertId, id_descr_acti, cantidad, consecu });
// };

// Actualizar un detalle de actividad existente
exports.updateReporteDetalleActiviSigui = async (req, res) => {
  const { id_descr_acti, cantidad, consecu } = req.body;

  if (!id_descr_acti || !cantidad || !consecu) {
    return res.status(400).json({ error: 'id_descr_acti, cantidad y consecu son obligatorios' });
  }

  try {
    const actividad = await ReporteActiSigui.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Detalle de actividad no encontrado' });

    actividad.id_descr_acti = id_descr_acti;
    actividad.cantidad = cantidad;
    actividad.consecu = consecu;

    await actividad.save();

    res.json(actividad);
  } catch (error) {
    console.error('Error al actualizar Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Detalle de Actividad' });
  }
};
// exports.updateReporteDetalleActiviSigui = async (req, res) => {
//   const { id_descr_acti, cantidad, consecu } = req.body;

//   if (!id_descr_acti || !cantidad) {
//     return res.status(400).json({ error: 'id_descr_acti y cantidad son obligatorios' });
//   }

//   await pool.query(
//     'UPDATE report_activ_sigu SET id_descr_acti=?, cantidad=?, consecu=? WHERE id=?',
//     [id_descr_acti, cantidad, consecu, req.params.id]
//   );

//   res.json({ message: 'Detalle de actividad actualizado' });
// };

// Eliminar un detalle de actividad
exports.deleteReporteDetalleActiviSigui = async (req, res) => {
  try {
    const actividad = await ReporteActiSigui.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Detalle de actividad no encontrado' });

    await actividad.destroy();

    res.json({ message: 'Detalle de actividad eliminado' });
  } catch (error) {
    console.error('Error al eliminar Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Detalle de Actividad' });
  }
};
// exports.deleteReporteDetalleActiviSigui= async (req, res) => {
//   await pool.query('DELETE FROM report_activ_sigu WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Detalle de actividad eliminado' });
// };
