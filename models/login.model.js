const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
//const { Area } = require('.');

const Login = sequelize.define('Login', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Tipo_Id: {
        type: DataTypes.STRING(2)
    },
    Identificacion: {
        type: DataTypes.INTEGER(10)
    },
    Nombres: {
        type: DataTypes.STRING(40)
    },
    Apellidos: {
        type: DataTypes.STRING(40)
    },
    Email: {
        type: DataTypes.STRING(40)
    },
    Password: {
        type: DataTypes.STRING(30)
    },
    FechaNacimiento: {
        type: DataTypes.DATE
    },
    Rol: {
        type: DataTypes.STRING(20)
    }

}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Login;
