const Login = require('../models/login.model'); // Asegúrate de que este es el modelo correcto

exports.getLogins = async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.json(logins);
  } catch (error) {
    console.error("Error al obtener logins:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

exports.getLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (!login) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(login);
  } catch (error) {
    console.error("Error al obtener login:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

//  exports.createLogin = async (req, res) => {
//    try {
//      const nuevo = await Login.create(req.body);
//      res.status(201).json(nuevo);
//   } catch (error) {
//      console.error("Error al crear login:", error);
//      res.status(500).json({ message: "Error del servidor" });
//    }
//  };

exports.updateLogin = async (req, res) => {
  try {
    const actualizado = await Login.update(req.body, {
      where: { idUsuario: req.params.id }
    });
    res.json(actualizado);
  } catch (error) {
    console.error("Error al actualizar login:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

exports.deleteLogin = async (req, res) => {
  try {
    await Login.destroy({ where: { idUsuario: req.params.id } });
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    console.error("Error al eliminar login:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// ✅ MÉTODO DE LOGIN FUNCIONAL
exports.loginUsuario = async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ message: "Email y contraseña son obligatorios" });
  }

  try {
    const usuario = await Login.findOne({ where: { Email } });

    if (!usuario) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    if (usuario.Password !== Password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({
      data: {
        IdUsuario: usuario.idUsuario,
        Email: usuario.Email,
        Nombres: usuario.Nombres,
        Rol: usuario.Rol
      }
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};


// const Login = require('../models/login.model');

// // Obtener todos los login
// exports.getLogins = async (req, res) => {
//   try {
//     const logins = await Login.findAll();
//     res.json(logins);
//   } catch (error) {
//     console.error('Error al obtener Login:', error);
//     res.status(500).json({ error: 'Error del servidor' });
//   }
// }

// // Obtener un login por ID
// exports.getLogin = async (req, res) => {
//   try {
//     const login = await Login.findByPk(req.params.id);
//     if (!login) return res.status(404).json({ error: 'Login no encontrado' });
//     res.json(login);
//   } catch (error) {
//     console.error('Error al obtener login:', error);
//     res.status(500).json({ error: 'Error del servidor' });
//   }
// }

// // Crear un nuevo Login
// exports.createLogin = async (req, res) => {
//   try {
//     const { Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol } = req.body;

//     if (!Tipo_Id || !Identificacion || !Nombres || !Apellidos || !Email || !Password || !FechaNacimiento || !Rol) {
//       return res.status(400).json({ error: 'Faltan campos requeridos' });
//     }
//     if (typeof Identificacion !== 'number') {
//       return res.status(400).json({ error: 'El campo Identificacion debe ser numérico' });
//     }
//     const nuevoLogin = await Login.create({
//       Tipo_Id: Tipo_Id.trim(),
//       Identificacion: Identificacion,
//       Nombres: Nombres.trim(),
//       Apellidos: Apellidos.trim(),
//       Email: Email.trim(),
//       Password: Password.trim(),
//       FechaNacimiento: FechaNacimiento,
//       Rol: Rol.trim()
//     });

//     res.json(nuevoLogin);
//   } catch (error) {
//     console.error('Error en createLogin:', error);
//     res.status(500).json({ error: 'Error del servidor al crear Login' });
//   }
// }

// // Actualizar un Login
// exports.updateLogin = async (req, res) => {
//   try {
//     const { Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol } = req.body;

//     if (!Tipo_Id || !Identificacion || !Nombres || !Apellidos || !Email || !Password || !FechaNacimiento || !Rol) {
//       return res.status(400).json({ error: 'Faltan campos requeridos' });
//     }
//     if (typeof Identificacion !== 'number') {
//       return res.status(400).json({ error: 'El campo Identificacion debe ser numérico' });
//     }
//     const login = await Login.findByPk(req.params.id);
//     if (!login) return res.status(404).json({ error: 'Login no encontrado' });

//     login.Tipo_Id = Tipo_Id.trim();
//     login.Identificacion = Identificacion;
//     login.Nombres = Nombres.trim();
//     login.Apellidos = Apellidos.trim();
//     login.Email = Email.trim();
//     login.Password = Password.trim();
//     login.FechaNacimiento = FechaNacimiento;
//     login.Rol = Rol.trim();
//     await login.save();

//     res.json(login);
//   } catch (error) {
//     console.error('Error en updateLogin:', error);
//     res.status(500).json({ error: 'Error del servidor al actualizar Login' });
//   }
// }
// // Eliminar un Login
// exports.deleteLogin = async (req, res) => {
//   try {
//     const login = await Login.findByPk(req.params.id);
//     if (!login) return res.status(404).json({ error: 'Login no encontrado' });

//     await login.destroy();
//     res.json({ message: 'Login eliminado correctamente' });
//   } catch (error) {
//     console.error('Error al eliminar login:', error);
//     res.status(500).json({ error: 'Error del servidor al eliminar Login' });
//   }
// }

// //Necesitamos agregar una ruta separada para iniciar sesión, distinta de createLogin.

// exports.loginUsuario = async (req, res) => {
//   const { Email, Password } = req.body;

//   try {
//     const usuario = await Login.findOne({ where: { Email } });

//     if (!usuario) {
//       return res.status(401).json({ message: "Usuario no encontrado" });
//     }

//     if (usuario.Password !== Password) {
//       return res.status(401).json({ message: "Contraseña incorrecta" });
//     }

//     res.status(200).json({
//       data: {
//         IdUsuario: usuario.IdUsuario,
//         Email: usuario.Email,
//         Nombres: usuario.Nombres,
//         Rol: usuario.Rol
//       }
//     });

//   } catch (error) {
//     console.error("Error al iniciar sesión:", error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }
// };
