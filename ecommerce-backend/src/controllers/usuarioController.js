import { Usuario, Pedido, Carrito } from '../models/index.js';

export const obtenerUsuariosActivos = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      where: { activa: true }
    });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
     const usuario = await Usuario.findByPk(id, {
      include: [Pedido, Carrito]  
    });

    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario); 
  } catch (error) {
    console.error("Error al crear usuario:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      const usuarioActualizado = await usuario.update(datosActualizar);
      res.status(200).json(usuarioActualizado);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Usuario.destroy({
      where: { id: id }
    });
    
    if (resultado > 0) { 
      res.status(200).json({ message: 'Usuario eliminado exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Usuario no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};
