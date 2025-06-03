//const Usuario = require('../models/usuarios.model');
const { Usuario } = require('../models'); // ✅ importar desde index.js


exports.login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { Email } });

    if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

    if (user.Password !== Password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({
      data: {
        IdUsuario: user.idUsuario,
        Email: user.Email,
        Nombres: user.Nombres,
        Rol: user.Rol
      }
    });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// const { Usuario } = require('../models');

// exports.login = async (req, res) => {
//   const { Email, Password } = req.body;

//   try {
//     const user = await Usuario.findOne({ where: { Email } });

//     if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

//     if (user.Password !== Password) {
//       return res.status(401).json({ message: "Contraseña incorrecta" });
//     }

//     res.status(200).json({
//       data: {
//         IdUsuario: user.idUsuario,
//         Email: user.Email,
//         Nombres: user.Nombres,
//         Rol: user.Rol
//       }
//     });

//   } catch (error) {
//     console.error("Error en login:", error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }
// };



// const { Login } = require('../models/');


// exports.login = async (req, res) => {
//   const { Email, Password } = req.body;

//   try {
//     //const user = await Usuario.findOne({ where: { Email } });
//     const user = await Login.findOne({ where: { Email } });


//     if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

//     if (user.Password !== Password) { // 🔐 Aquí podrías usar bcrypt en producción
//       return res.status(401).json({ message: "Contraseña incorrecta" });
//     }

//     // Éxito
//     res.status(200).json({
//       data: {
//         //IdUsuario: user.id,
//         IdUsuario: user.idUsuario, // ✅
//         Email: user.Email,
//         Nombres: user.Nombres,
//         Rol: user.Rol
//       }
//     });
//   } catch (error) {
//     console.error("Error en login:", error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }
// };
