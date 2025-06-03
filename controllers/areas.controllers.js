const Areas = require('../models/areas.model');

exports.getAreas = async (req, res) => {
  try {
    const areas = await Areas.findAll();
    res.json(areas);
  } catch (error) {
    console.error('Error al obtener Areas:', error);
    res.status(500).json({ error: 'Error del servidor et' });
  }
};

exports.getArea = async (req, res) => {
  try {
    const area = await Areas.findByPk(req.params.id);
    if (!area) return res.status(404).json({ error: 'Area no encontrado' });
    res.json(area);
  } catch (error) {
    console.error('Error al obtener Area:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
exports.createArea = async (req, res) => {
  try {
    const { area_ } = req.body;

    if (!area_) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoArea = await Areas.create({
      area_: area_.trim()
    });

    res.json(nuevoArea);
  } catch (error) {
    console.error('Error en createArea:', error);
    res.status(500).json({ error: 'Error del servidor al crear Area' });
  }
};

exports.updateArea = async (req, res) => {
  try {
    const { area_ } = req.body;
    const area = await Areas.findByPk(req.params.id);
    if (!area) return res.status(404).json({ error: 'Area no encontrado' });

    await area.update({ area_ });
    res.json({ message: 'Area actualizado' });
  } catch (error) {
    console.error('Error al actualizar empleado:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.deleteArea = async (req, res) => {
  try {
    const area = await Areas.findByPk(req.params.id);
    if (!area) return res.status(404).json({ error: 'Area no encontrado' });

    await area.destroy();
    res.json({ message: 'Area eliminado' });
  } catch (error) {
    console.error('Error al eliminar area:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};