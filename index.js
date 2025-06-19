require('dotenv').config();
const app = require('./app'); 
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://dominio:${PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar con la base de datos:', err));

  