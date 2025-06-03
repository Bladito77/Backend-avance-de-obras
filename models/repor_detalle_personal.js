const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Detalle_persona = sequelize.define('Detalle_persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    cedula: {
        type: DataTypes.INTEGER(11)
    },
    consecu: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'reporte_d_detalle_personal',
  timestamps: false
});

module.exports = Detalle_persona;
