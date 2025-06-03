
const Materiales = require('../models/materiales.model');

// Obtener todos los materiales
exports.getMateriales = async (req, res) => {
  try {
    const materiales = await Materiales.findAll();
    res.json(materiales);
  } catch (error) {
    console.error('Error al obtener Materiales:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.getmaterial = async (req, res) => {
  try {
    const material = await Materiales.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material no encontrado' });
    res.json(material);
  } catch (error) {
    console.error('Error al obtener Material:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
// Crear un nuevo material
exports.creatematerial = async (req, res) => {
  try {
    const { name_mat, area } = req.body;

    if (!name_mat || !area) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoMaterial = await Materiales.create({
      name_mat: name_mat.trim(),
      area
    });

    res.json(nuevoMaterial);
  } catch (error) {
    console.error('Error en createMaterial:', error);
    res.status(500).json({ error: 'Error del servidor al crear Material' });
  }
};

// Actualizar un material
exports.updatematerial = async (req, res) => {
  try {
    const { name_mat, area } = req.body;

    if (!name_mat || !area) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const material = await Materiales.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material no encontrado' });

    material.name_mat = name_mat.trim();
    material.area = area;
    await material.save();

    res.json(material);
  } catch (error) {
    console.error('Error en updateMaterial:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Material' });
  }
}

// Eliminar un material
exports.deletematerial = async (req, res) => {
  try {
    const material = await Materiales.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material no encontrado' });

    await material.destroy();
    res.json({ message: 'Material eliminado' });
  } catch (error) {
    console.error('Error al eliminar Material:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
