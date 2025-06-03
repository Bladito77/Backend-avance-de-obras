const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cargos = sequelize.define('Cargos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    cargo: {
        type: DataTypes.STRING(30)
    },
    area: {
        type: DataTypes.INTEGER(11)
    },
    proyecto: {
    type: DataTypes.INTEGER(11)
  }
}, {
  tableName: 'cargos',
  timestamps: false
});

module.exports = Cargos;
