const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Detalle_mat = sequelize.define('Detalle_mat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    id_mat: {
        type: DataTypes.INTEGER(11)
    },
    cantidad: {
        type: DataTypes.DOUBLE(30)
    },
    proveedor: {
        type: DataTypes.STRING(30)
    },
    consecu: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'reporte_d_detalle_mat',
  timestamps: false
});

module.exports = Detalle_mat;
