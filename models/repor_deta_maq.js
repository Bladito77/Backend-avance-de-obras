const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Detalle_maqu = sequelize.define('Detalle_maqu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    id_maqu: {
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
  tableName: 'reporte_d_detalle_maq',
  timestamps: false
});

module.exports = Detalle_maqu;
