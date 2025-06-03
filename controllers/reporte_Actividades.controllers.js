
const ReporteActividades = require('../models/repor_actividades');

// Obtener todos los detalles de actividad
exports.getReporteDetalleActividades = async (req, res) => {
  try {
    const actividades = await ReporteActividades.findAll();
    res.json(actividades);
  } catch (error) {
    console.error('Error al obtener Detalles de Actividades:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Obtener un detalle de actividad por ID
exports.getReporteDetalleActividad = async (req, res) => {
  try {
    const actividad = await ReporteActividades.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Detalle de actividad no encontrado' });
    res.json(actividad);
  } catch (error) {
    console.error('Error al obtener Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// Crear un nuevo detalle de actividad
exports.createReporteDetalleActividad = async (req, res) => {
  const { id_descr_acti, cantidad, consecu } = req.body;

  if (!id_descr_acti || !cantidad || !consecu) {
    return res.status(400).json({ error: 'id_descr_acti y cantidad son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteActividades.create({
      id_descr_acti,
      cantidad,
      consecu
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Actividad2:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Actividad 3' });
  }
}
// Actualizar un detalle de actividad existente
exports.updateReporteDetalleActividad = async (req, res) => {
  const { id_descr_acti, cantidad, consecu } = req.body;

  if (!id_descr_acti || !cantidad || !consecu) {
    return res.status(400).json({ error: 'id_descr_acti y cantidad son obligatorios' });
  }

  try {
    const actividad = await ReporteActividades.findByPk(req.params.id);
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
}

// Eliminar un detalle de actividad
exports.deleteReporteDetalleActividad = async (req, res) => {
  try {
    const actividad = await ReporteActividades.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Detalle de actividad no encontrado' });

    await actividad.destroy();
    res.json({ message: 'Detalle de actividad eliminado' });
  } catch (error) {
    console.error('Error al eliminar Detalle de Actividad:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Detalle de Actividad' });
  }
}
