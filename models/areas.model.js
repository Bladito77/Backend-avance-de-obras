const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Areas = sequelize.define('Area', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    area_: {
        type: DataTypes.INTEGER(11)
    }
}, {
  tableName: 'areas',
  timestamps: false
});

module.exports = Areas;
