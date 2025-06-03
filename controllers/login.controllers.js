const Login = require('../models/login.model');

// Obtener todos los login
exports.getLogins = async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.json(logins);
  } catch (error) {
    console.error('Error al obtener Login:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Obtener un login por ID
exports.getLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (!login) return res.status(404).json({ error: 'Login no encontrado' });
    res.json(login);
  } catch (error) {
    console.error('Error al obtener login:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Crear un nuevo Login
exports.createLogin = async (req, res) => {
  try {
    const { Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol } = req.body;

    if (!Tipo_Id || !Identificacion || !Nombres || !Apellidos || !Email || !Password || !FechaNacimiento || !Rol) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    if (typeof Identificacion !== 'number') {
      return res.status(400).json({ error: 'El campo Identificacion debe ser numérico' });
    }
    const nuevoLogin = await Login.create({
      Tipo_Id: Tipo_Id.trim(),
      Identificacion: Identificacion,
      Nombres: Nombres.trim(),
      Apellidos: Apellidos.trim(),
      Email: Email.trim(),
      Password: Password.trim(),
      FechaNacimiento: FechaNacimiento,
      Rol: Rol.trim()
    });

    res.json(nuevoLogin);
  } catch (error) {
    console.error('Error en createLogin:', error);
    res.status(500).json({ error: 'Error del servidor al crear Login' });
  }
}

// Actualizar un Login
exports.updateLogin = async (req, res) => {
  try {
    const { Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol } = req.body;

    if (!Tipo_Id || !Identificacion || !Nombres || !Apellidos || !Email || !Password || !FechaNacimiento || !Rol) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    if (typeof Identificacion !== 'number') {
      return res.status(400).json({ error: 'El campo Identificacion debe ser numérico' });
    }
    const login = await Login.findByPk(req.params.id);
    if (!login) return res.status(404).json({ error: 'Login no encontrado' });

    login.Tipo_Id = Tipo_Id.trim();
    login.Identificacion = Identificacion;
    login.Nombres = Nombres.trim();
    login.Apellidos = Apellidos.trim();
    login.Email = Email.trim();
    login.Password = Password.trim();
    login.FechaNacimiento = FechaNacimiento;
    login.Rol = Rol.trim();
    await login.save();

    res.json(login);
  } catch (error) {
    console.error('Error en updateLogin:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar Login' });
  }
}
// Eliminar un Login
exports.deleteLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (!login) return res.status(404).json({ error: 'Login no encontrado' });

    await login.destroy();
    res.json({ message: 'Login eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar login:', error);
    res.status(500).json({ error: 'Error del servidor al eliminar Login' });
  }
}