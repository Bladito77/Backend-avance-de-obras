const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a la base de datos');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
    app.get('/api/ping', (req, res) => {
      res.send('✅ Backend activo y corriendo');
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });
