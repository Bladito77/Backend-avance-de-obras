
const express = require('express');
const router = express.Router();
const { guardarReporteCompleto } = require('../controllers/reportes.controller');
const { generarPDF } = require('../controllers/reportes.controller');
const { spawn } = require('child_process');
const path = require('path');

// Ruta para guardar el reporte completo
router.post('/', guardarReporteCompleto);


// Ruta para imprimir el reporte en PDF usando Java y Jasper
router.get('/imprimir/:id', (req, res) => {
  const { id } = req.params;

  const proceso = spawn('java', [
    '-cp',
    path.join(__dirname, '../target/GeneradorReporte.jar') + ':' + path.join(__dirname, '../target/lib/*'),
    'GeneradorReporte',
    id
  ]);

  // 🔍 Capturar errores del .jar
  proceso.stderr.on('data', (data) => {
    //console.error(`stderr: ${data}`);
  });

  // 🔍 Capturar salida normal
  proceso.stdout.on('data', (data) => {
    //console.log(`stdout: ${data}`);
  });

  proceso.on('close', (code) => {
    if (code === 0) {
      const rutaPDF = path.join(__dirname, `../reportes_generados/reporte_${id}.pdf`);
      res.download(rutaPDF);
    } else {
      res.status(500).send('Error al generar el reporte.');
    }
  });
  router.get('/pdf/:id', generarPDF);
});

module.exports = router;

