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
exports.createReporteDetallePersona = async (req, res) => {
  const { cedula, consecu, horas } = req.body;

  if (!cedula || !consecu || !horas) {
    return res.status(400).json({ error: 'cedula, consecu Y horas son obligatorios' });
  }

  try {
    const nuevoDetalle = await ReporteDetaPersona.create({
      cedula,
      consecu,
      horas
    });

    res.json(nuevoDetalle);
  } catch (error) {
    console.error('Error al crear Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor al crear Detalle de Persona' });
  }
}
exports.updateReporteDetallePersona = async (req, res) => {
  const { cedula, consecu, horas } = req.body;

  if (!cedula || !consecu || !horas) {
    return res.status(400).json({ error: 'cedula, consecu y horas son obligatorios' });
  }

  try {
    const detalle = await ReporteDetaPersona.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de persona no encontrado' });

    detalle.cedula = cedula;
    detalle.consecu = consecu;
    detalle.horas = horas;
    await detalle.save();

    res.json(detalle);
  } catch (error) {
    console.error('Error al actualizar Detalle de Persona:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Detalle de Persona' });
  }
}
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

