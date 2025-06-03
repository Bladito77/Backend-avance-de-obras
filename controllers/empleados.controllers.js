
const Empleados = require('../models/empleados.model');

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleados.findAll();
    res.json(empleados);
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.getEmpleado = async (req, res) => {
  try {
    const empleado = await Empleados.findByPk(req.params.id);
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (error) {
    console.error('Error al obtener empleado:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.createEmpleado = async (req, res) => {
  try {
    const { nombres, apellidos, cedula, telefono, cargo, area, ciudad } = req.body;

    if (!nombres || !apellidos || !cedula || !telefono || !cargo || !area || !ciudad) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoEmpleado = await Empleados.create({
      nombres: nombres.trim(),
      apellidos: apellidos.trim(),
      cedula,
      telefono: telefono,
      cargo,
      area,
      ciudad: ciudad.trim()
    });

    res.json(nuevoEmpleado);
  } catch (error) {
    console.error('Error en createEmpleado:', error);
    res.status(500).json({ error: 'Error del servidor al crear el empleado' });
  }
};

exports.updateEmpleado = async (req, res) => {
  try {
    const { nombres, apellidos, cedula, telefono, cargo, area, ciudad } = req.body;
    const empleado = await Empleados.findByPk(req.params.id);
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });

    await empleado.update({ nombres, apellidos, cedula, telefono, cargo, area, ciudad });
    res.json({ message: 'Empleado actualizado' });
  } catch (error) {
    console.error('Error al actualizar empleado:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};


exports.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleados.findByPk(req.params.id);
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });

    await empleado.destroy();
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    console.error('Error al eliminar empleado:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
