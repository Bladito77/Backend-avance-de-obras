const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Detalle_encabeza = sequelize.define('Detalle_encabeza', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE
    },
    proyectos: {
        type: DataTypes.INTEGER(11)
    },
    area: {
        type: DataTypes.INTEGER(11)
    },
    fechainicio: {
        type: DataTypes.DATE
    },
    fechafin: {
        type: DataTypes.DATE
    },
    responsable: {
        type: DataTypes.INTEGER(11)
    },
    linea: {
        type: DataTypes.STRING(30)
    },
    tiempo: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'reporte_d_encabezado',
    timestamps: false
});

module.exports = Detalle_encabeza;
