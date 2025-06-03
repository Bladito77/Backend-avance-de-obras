
const Proyectos = require('../models/proyectos.model');

// Obtener todos los materiales
exports.getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyectos.findAll();
    res.json(proyectos);
  } catch (error) {
    console.error('Error al obtener Proyectos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// Obtener un material por ID
exports.getProyecto = async (req, res) => {
  try {
    const proyecto = await Proyectos.findByPk(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(proyecto);
  } catch (error) {
    console.error('Error al obtener Proyecto:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Crear un nuevo material
exports.createProyecto = async (req, res) => {
  try {
    const { proyectos } = req.body;

    if (!proyectos ) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoProyecto = await Proyectos.create({
      proyectos: proyectos.trim()
    });

    res.json(nuevoProyecto);
  } catch (error) {
    console.error('Error en createProyecto:', error);
    res.status(500).json({ error: 'Error del servidor al crear Proyecto' });
  }
};
// Actualizar un material
exports.updateProyecto = async (req, res) => {
  try {
    const { proyectos } = req.body;

    if (!proyectos) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const proyecto = await Proyectos.findByPk(req.params.id);
    if (!proyectos) return res.status(404).json({ error: 'Proyecto no encontrado' });

    proyecto.proyectos = proyectos.trim();
    
    await proyecto.save();

    res.json(proyecto);
  } catch (error) {
    console.error('Error en updateProyecto:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Proyecto' });
  }
};

// Eliminar un material
exports.deleteProyecto = async (req, res) => {
  try {
    const proyecto = await Proyectos.findByPk(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });

    await proyecto.destroy();
    res.json({ message: 'Proyecto eliminado' });
  } catch (error) {
    console.error('Error al eliminar Proyecto:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
