const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empleados = sequelize.define('Empleados', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    nombres: {
        type: DataTypes.STRING(100)
    },
    apellidos: {
        type: DataTypes.STRING(100)
    },
    cedula: {
        type: DataTypes.INTEGER(11)
    },
    telefono: {
        type: DataTypes.STRING(50)
    },
    cargo: {
        type: DataTypes.INTEGER(11)
    },
    area: {
        type: DataTypes.INTEGER(11)
    },
    ciudad: {
    type: DataTypes.STRING(30)
  }
}, {
  tableName: 'empleados',
  timestamps: false
});

module.exports = Empleados;
