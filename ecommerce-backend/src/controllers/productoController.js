import { Producto } from '../models/index.js';
import { Op } from 'sequelize';

export const obtenerProductos = async (req, res) => {
  try {

    const { oferta, descuentoMin } = req.query;
    const where = {};

    if (oferta === 'true') {
      where.oferta = true;
    }

    if (descuentoMin) {
      where.descuento = { [Op.gte]: Number(descuentoMin) }
    }

    const productos = await Producto.findAll({ where });
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto); 
  } catch (error) {
    console.error("Error al crear producto:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const producto = await Producto.findByPk(id);
    
    if (producto) {
      const productoActualizado = await producto.update(datosActualizar);
      res.status(200).json(productoActualizado);
    } else {
      res.status(404).json({ message: 'Producto no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Producto.destroy({
      where: { id: id }
    });
    if (resultado > 0) { 
      res.status(200).json({ message: 'Producto eliminado exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Producto no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};
