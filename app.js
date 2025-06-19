const express = require('express');
const cors = require('cors'); // <--- AÑADIDO
const app = express();
const { sequelize } = require('./models');
const reportesRoutes = require('./routes/reportes.routes');

const allowedOrigins = [
  'http://localhost:3001', // desarrollo local
  'https://backend-avance-de-obras-production.up.railway.app' // para probar desde Postman
];
require('dotenv').config();
app.use(cors({
  origin: allowedOrigins,
  //origin: 'http://localhost:3001', // <--- SOLO permites el frontend local
  credentials: true
}));

app.use(express.json());
// Rutas
//app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/reportes', reportesRoutes);
app.use('/api/login', require('./routes/login.routes'));
app.use('/api/proyectos', require('./routes/proyectos.routes'));
app.use('/api/actividades', require('./routes/actividades.routes'));
app.use('/api/areas', require('./routes/areas.routes'));
app.use('/api/cargos', require('./routes/cargos.routes')); 
app.use('/api/empleados', require('./routes/empleados.routes'));
app.use('/api/equipos', require('./routes/equipos.routes'));
app.use('/api/materiales', require('./routes/materiales.routes'));
app.use('/api/actu_sigu', require('./routes/report_actu_sigu.routes'));
//app.use('/api/proyectos', require('./routes/report_Actividades.routes'));
app.use('/api/reporte_activi', require('./routes/reporte_Actividades.routes'));
app.use('/api/repo_detalle_maq', require('./routes/reporte_D_Deta_maq.routes'));
//app.use('/api/proyectos', require('./routes/reporte_D_Detatalle_mate.routes'));
app.use('/api/repo_deta_mat', require('./routes/reporte_D_Detalle_mate.routes'));
app.use('/api/repo_deta_person', require('./routes/reporte_D_Detalle_personal.routes'));
app.use('/api/repor_deta_encabeza', require('./routes/reporte_d_Encabeza.routes'));
app.use('/api/reportes', reportesRoutes);
// Agrega más rutas según crees los archivos
module.exports = app;
