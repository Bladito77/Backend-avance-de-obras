const Actividades = require('../models/actividades.model');

exports.getActividades = async (req, res) => {
  try {
    const actividades = await Actividades.findAll();
    res.json(actividades);
  } catch (error) {
    console.error('Error al obtener Actividades:', error);
    res.status(500).json({ error: 'Error del servidor edwin' });
  }
};

exports.getActividad = async (req, res) => {
  try {
    const actividad = await Actividades.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrado' });
    res.json(actividad);
  } catch (error) {
    console.error('Error al obtener Actividad:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};


exports.createActividad = async (req, res) => {
  try {
    const { descript, area, proyecto } = req.body;

    if (!descript || !area || !proyecto) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoActividad = await Actividades.create({
      descript: descript.trim(),
      area,
      proyecto: proyecto
    });

    res.json(nuevoActividad);
  } catch (error) {
    console.error('Error en createActividad:', error);
    res.status(500).json({ error: 'Error del servidor al crear Actividad' });
  }
};

exports.updateActividad = async (req, res) => {
  try {
    const { descript, area, proyecto } = req.body;
    const actividad = await Actividades.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrado' });

    await actividad.update({ descript,area, proyecto });
    res.json({ message: 'Actividad actualizada' });
  } catch (error) {
    console.error('Error al actualizar Actividad:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.deleteActividad = async (req, res) => {
  try {
    const actividad = await Actividades.findByPk(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrada' });

    await actividad.destroy();
    res.json({ message: 'Actividad eliminado' });
  } catch (error) {
    console.error('Error al eliminar Actividad:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

