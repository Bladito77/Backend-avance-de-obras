const Cargos = require('../models/cargos.model');


exports.getCargos = async (req, res) => {
  try {
    const cargos = await Cargos.findAll();
    res.json(cargos);
  } catch (error) {
    console.error('Error al obtener Cargos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  };
}
exports.getCargo = async (req, res) => {
  try {
    const cargo = await Cargos.findByPk(req.params.id);
    if (!cargo) return res.status(404).json({ error: 'Cargo no encontrado' });
    res.json(cargo);
  } catch (error) {
    console.error('Error al obtener Cargo:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}


exports.createCargo = async (req, res) => {
  try {
    const { cargo, area, proyecto } = req.body;

    if (!cargo || !area || !proyecto) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoCargo = await Cargos.create({
      cargo: cargo.trim(),
      area,
      proyecto
    });

    res.json(nuevoCargo);
  } catch (error) {
    console.error('Error en createCargo:', error);
    res.status(500).json({ error: 'Error del servidor al crear Cargo' });
  }
}

exports.updateCargo = async (req, res) => {
  try {
    const { cargo, area, proyecto } = req.body;
    const cargoToUpdate = await Cargos.findByPk(req.params.id);
    if (!cargoToUpdate) return res.status(404).json({ error: 'Cargo no encontrado' });

    await cargoToUpdate.update({ cargo, area, proyecto });
    res.json({ message: 'Cargo actualizado' });
  } catch (error) {
    console.error('Error al actualizar Cargo:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

exports.deleteCargo = async (req, res) => {
  try {
    const cargo = await Cargos.findByPk(req.params.id);
    if (!cargo) return res.status(404).json({ error: 'Cargo no encontrado' });

    await cargo.destroy();
    res.json({ message: 'Cargo eliminado' });
  } catch (error) {
    console.error('Error al eliminar Cargo:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}