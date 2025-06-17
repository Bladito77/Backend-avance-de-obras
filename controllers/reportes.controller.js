const {
  Encabezados,
  Maquinas,
  ReporteMater,
  ReportDetPerson,
  ReportDetActivi,
  ReportDetActiviSigu
} = require('../models');
const { exec } = require('child_process');
const path = require('path');
exports.generarPDF = (req, res) => {
  const id = req.params.id;
  const jarPath = path.join(__dirname, '..', '..', 'generadorReporteJava', 'target', 'generador-reporte-1.0-jar-with-dependencies.jar');

  exec(`java -jar "${jarPath}" ${id}`, (error, stdout, stderr) => {
    if (error) {
      //console.error(`Error al generar PDF: ${stderr}`);
      return res.status(500).json({ error: 'Error al generar el PDF' });
    }

    const pdfPath = path.join(__dirname, '..', '..', 'generadorReporteJava', 'reportes_generados', `reporte_${id}.pdf`);
    res.sendFile(pdfPath); // o res.download(pdfPath)
  });
};
const guardarReporteCompleto = async (req, res) => {
  //console.log("📥 Recibido en el backend:");
  //console.log(JSON.stringify(req.body, null, 2)); // Esto imprimirá todo el payload
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
    //console.log("📥 Payload recibido completo:");
    //console.dir(req.body, { depth: null });
    //console.log("📩 Datos recibidos:");
    //console.log("Encabezado:", encabezado);
    //console.log("Empleados:", empleados);
    //console.log("Equipos:", equipos);
    //console.log("Materiales:", materiales);
    //console.log("Actividades realizadas:", actividades_realizadas);
    //console.log("Actividades futuras:", actividades_futuras);

    // 1. Guardar encabezado
    const nuevoEncabezado = await Encabezados.create(encabezado, { transaction: t });
    const consecu = nuevoEncabezado.id;
    //console.log("✅ Encabezado guardado con ID:", consecu);

    // 2. Guardar empleados
    if (empleados.length > 0) {
      for (const emp of empleados) {
        if (!emp.cedula || isNaN(parseFloat(emp.horas))) {
          throw new Error(`Empleado con datos incompletos: ${JSON.stringify(emp)}`);
        }
      }
      //console.log("➡️ Insertando empleado:", empleados);
      await Promise.all(
        empleados.map(emp => {
          const horas = parseFloat(emp.horas);
          //console.log("👷‍♂️ Insertando detalle_personal:", { cedula: emp.cedula, horas, consecu });
          return ReportDetPerson.create({
            cedula: emp.cedula,
            horas,
            consecu
          }, { transaction: t });
        })
      );
      //console.log("✅ Empleados guardados");
    }

    // 3. Guardar equipos
    if (equipos.length > 0) {
      await Promise.all(
        // equipos.map(eq =>
        //   Maquinas.create({ ...eq, consecu }, { transaction: t })
        //   //Maquinas.create({ ...eq, consecu }, { transaction: t }) // ← 👈 ¡PELIGRO AQUÍ!
        // )
        // equipos.map(({ id, ...eq }) =>
        //   Maquinas.create({ ...eq, consecu }, { transaction: t })
        // )
        equipos.map(eq => {
          const { id, ...safe } = eq; // ⚠️ asegurarse otra vez aquí
          return Maquinas.create({ ...safe, consecu }, { transaction: t });
        })


      );
      //console.log("➡️ Insertando equipos:", equipos);
      //console.log("✅ Equipos guardados");
    }

    // 4. Guardar materiales
    if (materiales.length > 0) {
      await Promise.all(
        // materiales.map(mat =>
        //   ReporteMater.create({ ...mat, consecu }, { transaction: t }) // ← 👈 ¡PELIGRO!
        // )
        materiales.map(({ id, ...mat }) =>
          ReporteMater.create({ ...mat, consecu }, { transaction: t })
        )

      );
      //console.log("➡️ Insertando materiales:", materiales);
      //console.log("✅ Materiales guardados");
    }

    // 5. Actividades realizadas
    if (actividades_realizadas.length > 0) {
      await Promise.all(
        // actividades_realizadas.map(act =>
        //   ReportDetActivi.create({ ...act, consecu }, { transaction: t })
        // )
        actividades_realizadas.map(({ id, ...act }) =>
          ReportDetActivi.create({ ...act, consecu }, { transaction: t })
        )
      );
      //console.log("➡️ Insertando actividades realizadas:", actividades_realizadas);
      //console.log("✅ Actividades realizadas guardadas");
    }

    // 6. Actividades futuras
    if (actividades_futuras.length > 0) {
      await Promise.all(
        // actividades_futuras.map(act =>
        //   ReportDetActiviSigu.create({ ...act, consecu }, { transaction: t })
        // )
        actividades_futuras.map(({ id, ...act }) =>
          ReportDetActiviSigu.create({ ...act, consecu }, { transaction: t })
        )
      );
      //console.log("➡️ Insertando actividades futuras:", actividades_futuras);
      //console.log("✅ Actividades futuras guardadas");
    }

    await t.commit();
    res.status(201).json({ message: 'Reporte guardado correctamente' });

  } catch (error) {
    await t.rollback();
    //console.error("❌ Error al guardar reporte:", error.message);
    //console.error("🧠 Stack:", error.stack);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { guardarReporteCompleto };
