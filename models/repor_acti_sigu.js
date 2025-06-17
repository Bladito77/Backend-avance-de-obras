const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Acti_Sigui = sequelize.define('Acti_Sigui', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // ⚠️ Esto es obligatorio para que Sequelize maneje la clave primaria

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
  tableName: 'report_activ_sigu',
  timestamps: false
});

module.exports = Acti_Sigui;
