//const pool = require('../config/db');
const ReporteEncabeza = require('../models/repor_encabeza.model');

exports.getReporteEncabezados = async (req, res) => {
  try {
    const encabezados = await ReporteEncabeza.findAll();
    res.json(encabezados);
  } catch (error) {
    console.error('Error al obtener Encabezados:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteEncabezados = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_encabezado');
//   res.json(rows);
// };
exports.getReporteEncabezado = async (req, res) => {
  try {
    const encabezado = await ReporteEncabeza.findByPk(req.params.id);
    if (!encabezado) return res.status(404).json({ error: 'Encabezado no encontrado' });
    res.json(encabezado);
  } catch (error) {
    console.error('Error al obtener Encabezado:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
// exports.getReporteEncabezado = async (req, res) => {
//   const [rows] = await pool.query('SELECT * FROM reporte_d_encabezado WHERE id = ?', [req.params.id]);
//   res.json(rows[0]);
// };
exports.createReporteEncabezado = async (req, res) => {
  const { fecha, proyectos, area, fechainicio, fechafin, responsable, linea, tiempo } = req.body;

  if (!fecha || !proyectos || !area || !fechainicio || !fechafin || !responsable || !linea || !tiempo) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevoEncabezado = await ReporteEncabeza.create({
      fecha,
      proyectos,
      area,
      fechainicio,
      fechafin,
      responsable,
      linea,
      tiempo
    });

    res.json(nuevoEncabezado);
  } catch (error) {
    console.error('Error al crear Encabezado:', error);
    res.status(500).json({ error: 'Error del servidor al crear Encabezado' });
  }
}
// exports.createReporteEncabezado = async (req, res) => {
//   const { fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo } = req.body;
//   const [result] = await pool.query('INSERT INTO reporte_d_encabezado (fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo) VALUES (?, ?, ?, ?, ?, ? ,? ,?)', [fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo]);
//   res.json({ id: result.insertId, fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo });
// };
exports.updateReporteEncabezado = async (req, res) => {
  const { fecha, proyectos, area, fechainicio, fechafin, responsable, linea, tiempo } = req.body;

  if (!fecha || !proyectos || !area || !fechainicio || !fechafin || !responsable || !linea || !tiempo) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const encabezado = await ReporteEncabeza.findByPk(req.params.id);
    if (!encabezado) return res.status(404).json({ error: 'Encabezado no encontrado' });

    encabezado.fecha = fecha;
    encabezado.proyectos = proyectos;
    encabezado.area = area;
    encabezado.fechainicio = fechainicio;
    encabezado.fechafin = fechafin;
    encabezado.responsable = responsable;
    encabezado.linea = linea;
    encabezado.tiempo = tiempo;

    await encabezado.save();

    res.json(encabezado);
  } catch (error) {
    console.error('Error al actualizar Encabezado:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Encabezado' });
  }
};
// exports.updateReporteEncabezado = async (req, res) => {
//   const { fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo } = req.body;
//   await pool.query('UPDATE reporte_d_encabezado SET fecha=?, proyectos=?, area=?, fechainicio=?, fechafin=?, responsable=?, linea=?, tiempo=? WHERE id=?', [fecha,proyectos,area,fechainicio,fechafin,responsable,linea,tiempo, req.params.id]);
//   res.json({ message: 'Encabezado actualizado' });
// };
exports.deleteReporteEncabezado = async (req, res) => {
  try {
    const encabezado = await ReporteEncabeza.findByPk(req.params.id);
    if (!encabezado) return res.status(404).json({ error: 'Encabezado no encontrado' });

    await encabezado.destroy();
    res.json({ message: 'Encabezado eliminado' });
  } catch (error) {
    console.error('Error al eliminar Encabezado:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Encabezado' });
  }
};
// exports.deleteReporteEncabezado = async (req, res) => {
//   await pool.query('DELETE FROM reporte_d_encabezado WHERE id = ?', [req.params.id]);
//   res.json({ message: 'Encabezado eliminado' });
// };
