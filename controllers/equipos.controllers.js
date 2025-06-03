
const Equipos = require('../models/equipos.model');

// Obtener todos los equipos
exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipos.findAll();
    res.json(equipos);
  } catch (error) {
    console.error('Error al obtener Equipos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// Obtener un equipo por ID
exports.getEquipo = async (req, res) => {
  try {
    const equipo = await Equipos.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (error) {
    console.error('Error al obtener Equipo:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// Crear un nuevo equipo
exports.createEquipo = async (req, res) => {
  try {
    const { name_machine, area, proyecto } = req.body;

    if (!name_machine || !area || !proyecto) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoEquipo = await Equipos.create({
      name_machine: name_machine.trim(),
      area,
      proyecto
    });

    res.json(nuevoEquipo);
  } catch (error) {
    console.error('Error en createEquipo:', error);
    res.status(500).json({ error: 'Error del servidor al crear Equipo' });
  }
}

// Actualizar un equipo
exports.updateEquipo = async (req, res) => {
  try {
    const { name_machine, area, proyecto } = req.body;

    if (!name_machine || !area || !proyecto) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const equipo = await Equipos.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });

    equipo.name_machine = name_machine.trim();
    equipo.area = area;
    equipo.proyecto = proyecto;
    await equipo.save();

    res.json(equipo);
  } catch (error) {
    console.error('Error en updateEquipo:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Equipo' });
  }
}

// Eliminar un equipo
exports.deleteEquipo = async (req, res) => {
  try {
    const equipo = await Equipos.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });

    await equipo.destroy();
    res.json({ message: 'Equipo eliminado' });
  } catch (error) {
    console.error('Error al eliminar Equipo:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Equipo' });
  }
}
// exports.deleteEquipo = async (req, res) => {
//   await pool.query('DELETE FROM equipos WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Equipo eliminado' });
// };
