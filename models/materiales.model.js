const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
//const { Area } = require('.');

const Material = sequelize.define('Material', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_mat: {
        type: DataTypes.STRING(30)
    },
    area: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'materiales',
    timestamps: false
});

module.exports = Material;
