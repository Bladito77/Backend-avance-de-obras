const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Detalle_persona = sequelize.define('Detalle_persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // ✅ clave para que Sequelize no intente asignarlo
  },
    cedula: {
        type: DataTypes.INTEGER(11)
    },
    consecu: {
    type: DataTypes.INTEGER(11)
    },
    horas: {
    type: DataTypes.DECIMAL(5,2)
  }
}, {
  tableName: 'reporte_d_detalle_personal',
  timestamps: false
});

module.exports = Detalle_persona;
