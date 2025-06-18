const {
  Encabezados,
  Maquinas,
  ReporteMater,
  ReportDetPerson,
  ReportDetActivi,
  ReportDetActiviSigu
} = require('../models');

const path = require("path");
const { spawn } = require("child_process");

const generarPDF = (req, res) => {
  const { id } = req.params;
  const jarPath = path.join(__dirname, '..', 'generadorReporteJava', 'target', 'generador-reporte-1.0-jar-with-dependencies.jar');

  const proceso = spawn("java", ["-jar", jarPath, id]);

  proceso.stdout.on("data", (data) => {
    console.log(`[stdout]: ${data}`);
  });

  proceso.stderr.on("data", (data) => {
    console.error(`[stderr]: ${data}`);
  });

  proceso.on("close", (code) => {
    if (code === 0) {
      
      const rutaPDF = path.join(__dirname, '..', 'reportes_generados', `reporte_${id}.pdf`);

      res.download(rutaPDF);
    } else {
      res.status(500).send('Error al generar el reporte.');
    }
  });
};
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
    const consecu = nuevoEncabezado.id;
    

    // 2. Guardar empleados
    if (empleados.length > 0) {
      for (const emp of empleados) {
        if (!emp.cedula || isNaN(parseFloat(emp.horas))) {
          throw new Error(`Empleado con datos incompletos: ${JSON.stringify(emp)}`);
        }
      }
  
      await Promise.all(
        empleados.map(emp => {
          const horas = parseFloat(emp.horas);
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
        
        equipos.map(eq => {
          const { id, ...maq } = eq; // ⚠️ asegurarse otra vez aquí
          return Maquinas.create({ ...maq, consecu }, { transaction: t });
        })
      );
      //console.log("Equipos recibidos en backend:", equipos);

    }

    // 4. Guardar materiales
    if (materiales.length > 0) {
      await Promise.all(
        materiales.map(({ id, ...mat }) =>
          ReporteMater.create({ ...mat, consecu }, { transaction: t })
        )

      );
    }

    // 5. Actividades realizadas
    if (actividades_realizadas.length > 0) {
      await Promise.all(
          actividades_realizadas.map(({ id, ...act }) =>
          ReportDetActivi.create({ ...act, consecu }, { transaction: t })
        )
      );
      
    }

    // 6. Actividades futuras
    if (actividades_futuras.length > 0) {
      await Promise.all(
        actividades_futuras.map(({ id, ...act }) =>
          ReportDetActiviSigu.create({ ...act, consecu }, { transaction: t })
        )
      );
    }

    await t.commit();
      //console.log("🧾 ID del reporte que se enviará al frontend:", consecu);
      res.status(201).json({ message: 'Reporte guardado correctamente', id: consecu });


  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};

module.exports = { guardarReporteCompleto, generarPDF };
