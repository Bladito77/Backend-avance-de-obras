const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

//Importar todos los modelos
const Login = require('./login.model');
const Proyecto = require('./proyectos.model');
const Cargo = require('./cargos.model');
const Empleado = require('./empleados.model');
const Area = require('./areas.model');
const Equipo = require('./equipos.model');
const Material = require('./materiales.model');
const Actividad = require('./actividades.model');

//hasta aca los basicos

//Aquí puedes definir relaciones si lo deseas
const Encabezados = require('./repor_encabeza.model');
const Maquinas = require('./repor_deta_maq');
const ReporteMater = require('./repor_detalle_mate');
const ReportDetPerson = require('./repor_detalle_personal');
const ReportDetActivi = require('./repor_actividades');
const ReportDetActiviSigu = require('./repor_acti_sigu');
//Por ejemplo: Empleado.belongsTo(Cargo, { foreignKey: 'cargo' });

module.exports = {
    sequelize,
    Login,
    Proyecto,
    Cargo,
    Empleado,
    Area,
    Equipo,
    Material,
    Actividad,
    Encabezados,
    Maquinas,
    ReporteMater,
    ReportDetPerson,
    ReportDetActivi,
    ReportDetActiviSigu
};