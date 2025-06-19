import { Router } from "express";
import categoriaRoutes from './categoriaRoutes.js';
import productoRoutes from './productoRoutes.js';
import cuponDescuentoRoutes from './cuponDescuentoRoutes.js';
import pedidoRoutes from './pedidoRoutes.js'

const router = Router();

router.use('/categorias', categoriaRoutes);
router.use('/productos', productoRoutes);
router.use('/cupones', cuponDescuentoRoutes);
router.use('/pedidos', pedidoRoutes);

export default router;