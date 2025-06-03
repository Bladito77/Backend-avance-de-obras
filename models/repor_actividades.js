const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Actividad = sequelize.define('Actividad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    id_descr_acti: {
        type: DataTypes.INTEGER(11)
    },
    cantidad: {
        type: DataTypes.DOUBLE(30)
    },
    consecu: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'report_actividades',
  timestamps: false
});

module.exports = Actividad;
