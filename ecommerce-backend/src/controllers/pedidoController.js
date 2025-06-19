import { CuponDescuento, Pedido } from '../models/index.js';

export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      where: { activa: true },
      include: CuponDescuento
    });
    res.status(200).json(pedidos);
  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerPedidoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id, {include: CuponDescuento});

    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener pedido por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido.create(req.body);
    res.status(201).json(nuevoPedido); 
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const actualizarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const pedido = await Pedido.findByPk(id);
    if (pedido) {
      const pedidoActualizado = await pedido.update(datosActualizar);
      res.status(200).json(pedidoActualizado);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar pedido:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Pedido.destroy({
      where: { id: id }
    });
    
    if (resultado > 0) { 
      res.status(200).json({ message: 'Pedido eliminado exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Pedido no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar pedido:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};