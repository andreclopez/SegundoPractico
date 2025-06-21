import express from 'express';
import { 
    obtenerPedidosxProductosActivos, 
    obtenerPedidoxProductoPorId, 
    crearPedidoxProducto, 
    actualizarPedidoxProducto, 
    eliminarPedidoxProducto 
} from '../controllers/pedidoxProductoController.js';

const router = express.Router();

router.get('/', obtenerPedidosxProductosActivos);
router.get('/:id', obtenerPedidoxProductoPorId);
router.post('/', crearPedidoxProducto);
router.put('/:id', actualizarPedidoxProducto);
router.delete('/:id', eliminarPedidoxProducto);


export default router;