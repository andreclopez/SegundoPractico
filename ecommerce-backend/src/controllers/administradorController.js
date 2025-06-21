import { Administrador, Producto, Proveedor } from '../models/index.js';

export const obtenerAdministradores = async (req, res) => {
  try {
    const administradores = await Administrador.findAll({
      where: { activa: true }
    });
    res.status(200).json(administradores);
  } catch (error) {
    console.error("Error al obtener administradores:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerAdministradorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await Administrador.findByPk(id, {
      include: [
        { model: Producto, attributes: ['id', 'nombre'] },
        { model: Proveedor, attributes: ['cuit', 'nombre'] }
      ]
    });

    if (administrador) {
      res.status(200).json(administrador);
    } else {
      res.status(404).json({ message: 'Administrador no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener administrador por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const crearAdministrador = async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.email || !req.body.contraseña) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }
    const nuevoAdministrador= await Administrador.create(req.body);
    res.status(201).json(nuevoAdministrador); 
  } catch (error) {
    console.error("Error al crear administrador:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const actualizarAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const administrador = await Administrador.findByPk(id);
    if (administrador) {
      const administradorActualizado = await administrador.update(datosActualizar);
      res.status(200).json(administradorActualizado);
    } else {
      res.status(404).json({ message: 'Administrador no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar administrador:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Administrador.destroy({
      where: { id: id }
    });
    
    if (resultado > 0) { 
      res.status(200).json({ message: 'Administrador eliminado exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Administrador no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar administrador:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};
