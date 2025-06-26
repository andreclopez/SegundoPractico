import { PedidoxProducto, Producto, Pago } from '../models/index.js';

export const obtenerPedidosxProductosActivos = async (req, res) => {
  try {
    const pedidosxProductos = await PedidoxProducto.findAll();
    res.status(200).json(pedidosxProductos);
  } catch (error) {
    console.error("Error al obtener información:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerPedidoxProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoxProducto = await PedidoxProducto.findByPk(id, { 
      include: [Producto, Pago]
    });

    if (pedidoxProducto) {
      res.status(200).json(pedidoxProducto);
    } else {
      res.status(404).json({ message: 'Información no encontrada' });
    }
  } catch (error) {
    console.error("Error al obtener pedido por ID:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const crearPedidoxProducto = async (req, res) => {
  try {
    const { cantidad, idPedido, idProducto } = req.body;

    const producto = await Producto.findByPk(idProducto);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const precioUnitario = producto.precio;
    const subtotal = cantidad * precioUnitario;

    const nuevoPedidoxProducto = await PedidoxProducto.create({
      cantidad,
      precioUnitario,
      subtotal,
      idPedido,
      idProducto,
    });

    res.status(201).json(nuevoPedidoxProducto);

  } catch (error) {
    console.error("Error al crear información:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const actualizarPedidoxProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;
    const pedidoxProducto = await PedidoxProducto.findByPk(id);
    if (pedidoxProducto) {
      const pedidoxProductoActualizado = await pedidoxProducto.update(datosActualizar);
      res.status(200).json(pedidoxProductoActualizado);
    } else {
      res.status(404).json({ message: 'Datos no encontrados para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar la información:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const eliminarPedidoxProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await PedidoxProducto.destroy({
      where: { id: id }
    });
    
    if (resultado > 0) { 
      res.status(200).json({ message: 'Datos eliminados exitosamente' }); 
    } else {
      res.status(404).json({ message: 'Datos no encontrados para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar datos:", error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};
