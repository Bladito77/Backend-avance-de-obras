const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Actividades = sequelize.define('Actividades', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    descript: {
        type: DataTypes.STRING(100)
    },
    area: {
        type: DataTypes.INTEGER(11)
    },
    proyecto: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'actividades',
  timestamps: false
});

module.exports = Actividades;

