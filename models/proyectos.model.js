const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Proyecto = sequelize.define('Proyecto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  proyectos: {
    type: DataTypes.STRING(30)
  }
}, {
  tableName: 'proyectos',
  timestamps: false
});

module.exports = Proyecto;
