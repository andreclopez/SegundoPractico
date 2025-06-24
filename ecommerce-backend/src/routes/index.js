import { Router } from "express";
import administradorRoutes from './administradorRoutes.js';
import carritoRoutes from './carritoRoutes.js';
import carritoxProductoRoutes from './carritoxProductoRoutes.js'
import categoriaRoutes from './categoriaRoutes.js';
import cuponDescuentoRoutes from './cuponDescuentoRoutes.js';
import pagoRoutes from './pagoRoutes.js';
import pedidoRoutes from './pedidoRoutes.js';
import pedidoxProductoRoutes from './pedidoxProductoRoutes.js'
import productoRoutes from './productoRoutes.js';
import proveedorRoutes from './proveedorRoutes.js';
import usuarioRoutes from './usuarioRoutes.js';
import mensajeRoutes from './mensajeRoutes.js';

const router = Router();

router.use('/administradores', administradorRoutes);
router.use('/carritos', carritoRoutes);
router.use('/carritosxProductos', carritoxProductoRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/cupones', cuponDescuentoRoutes);
router.use('/pagos', pagoRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/pedidosxProductos', pedidoxProductoRoutes);
router.use('/productos', productoRoutes);
router.use('/proveedores', proveedorRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/productos/:idProducto/mensajes', mensajeRoutes);

export default router;