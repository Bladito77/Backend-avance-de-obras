const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Equipos = sequelize.define('Equipos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    name_machine: {
        type: DataTypes.STRING(30)
    },
    area: {
        type: DataTypes.INTEGER(11)
    },
    proyecto: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'Equipos',
  timestamps: false
});

module.exports = Equipos;
