const {
  Encabezados,
  Maquinas,
  ReporteMater,
  ReportDetPerson,
  ReportDetActivi,
  ReportDetActiviSigu
} = require('../models');

const guardarReporteCompleto = async (req, res) => {
  const t = await Encabezados.sequelize.transaction();
  try {
    const {
      encabezado,
      empleados,
      equipos,
      materiales,
      actividades_realizadas,
      actividades_futuras
    } = req.body;

    // 1. Guardar encabezado
    const nuevoEncabezado = await Encabezados.create(encabezado, { transaction: t });

    const idReporte = nuevoEncabezado.id;

    // 2. Guardar empleados
    await Promise.all(empleados.map(emp =>
      ReportDetPerson.create({ ...emp, id_encabeza: idReporte }, { transaction: t })
    ));

    // 3. Guardar equipos
    await Promise.all(equipos.map(eq =>
      Maquinas.create({ ...eq, id_encabeza: idReporte }, { transaction: t })
    ));

    // 4. Guardar materiales
    await Promise.all(materiales.map(mat =>
      ReporteMater.create({ ...mat, id_encabeza: idReporte }, { transaction: t })
    ));

    // 5. Actividades realizadas
    await Promise.all(actividades_realizadas.map(act =>
      ReportDetActivi.create({ ...act, id_encabeza: idReporte }, { transaction: t })
    ));

    // 6. Actividades futuras
    await Promise.all(actividades_futuras.map(act =>
      ReportDetActiviSigu.create({ ...act, id_encabeza: idReporte }, { transaction: t })
    ));

    await t.commit();
    res.status(201).json({ message: 'Reporte guardado correctamente' });

  } catch (error) {
    await t.rollback();
    console.error("Error al guardar reporte:", error);
    res.status(500).json({ error: 'Error al guardar el reporte' });
  }
};

module.exports = { guardarReporteCompleto };
