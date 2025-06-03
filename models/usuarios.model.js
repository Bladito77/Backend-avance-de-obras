const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuarios', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Tipo_Id: DataTypes.STRING(2),
    Identificacion: DataTypes.INTEGER(10),
    Nombres: DataTypes.STRING(40),
    Apellidos: DataTypes.STRING(40),
    Email: DataTypes.STRING(40),
    Password: DataTypes.STRING(30),
    FechaNacimiento: DataTypes.DATE,
    Rol: DataTypes.STRING(20)
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;


// module.exports = (sequelize, DataTypes) => {
//   const usuarios = sequelize.define("usuarios", {
//     idUsuario: {
//             type: DataTypes.INTEGER,
//             primaryKey: true
//         },
//         Tipo_Id: {
//             type: DataTypes.STRING(2)
//         },
//         Identificacion: {
//             type: DataTypes.INTEGER(10)
//         },
//         Nombres: {
//             type: DataTypes.STRING(40)
//         },
//         Apellidos: {
//             type: DataTypes.STRING(40)
//         },
//         Email: {
//             type: DataTypes.STRING(40)
//         },
//         Password: {
//             type: DataTypes.STRING(30)
//         },
//         FechaNacimiento: {
//             type: DataTypes.DATE
//         },
//         Rol: {
//             type: DataTypes.STRING(20)
//         }
//   }, {
//     tableName: 'usuarios', // nombre real en la base de datos
//     timestamps: false
//   });

//   return usuarios;
// };
