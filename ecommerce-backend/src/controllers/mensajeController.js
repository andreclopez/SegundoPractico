import { Mensaje } from '../models/index.js';

export const obtenerTodosLosMensajes = async (req, res) => {
  try {
    const mensajes = await Mensaje.findAll();
    res.status(200).json(mensajes);
  } catch (error) {
    console.error("Error al obtener los mensajes:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerMensajePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const mensaje = await Mensaje.findByPk(id);

    if (mensaje) {
      res.status(200).json(mensaje);
    } else {
      res.status(404).json({ message: 'Mensaje no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener mensaje por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerMensajePorProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const mensajes = await Mensaje.findAll({
            where: { idProducto }
        });
        
        if (mensajes.length > 0) {
            res.status(200).json(mensajes);
        } else {
            res.status(404).json({ message: 'No se encontraron mensajes para este producto' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes'});
    }
};

export const crearMensaje = async (req, res) => {
    try{ 
        const { idProducto } = req.params;
        const { texto } = req.body;

        if (!texto) {
            return res.status(400).json({ message: 'El texto del mensaje es obligatorio' });
        }

        const nuevoMensaje = await Mensaje.create({ texto, idProducto });
        res.status(201).json(nuevoMensaje);
        
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el mensaje' });

    }
};

export const actualizarMensaje = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const mensaje = await Mensaje.findByPk(id);
    if (mensaje) {
      const mensajeActualizado = await mensaje.update(datosActualizar);
      res.status(200).json(mensajeActualizado);
    } else {
      res.status(404).json({ message: 'Mensaje no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar mensaje:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarMensaje = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Mensaje.destroy({
      where: { id: id }
    });
    
    if (resultado > 0) { 
      res.status(200).json({ message: 'Mensaje eliminado exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Mensaje no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar mensaje:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};
