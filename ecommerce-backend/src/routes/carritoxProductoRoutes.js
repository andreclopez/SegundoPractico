import express from 'express';
import { 
    obtenerCarritosxProductosActivos, 
    obtenerCarritoxProductoPorId, 
    crearCarritoxProducto, 
    actualizarCarritoxProducto, 
    eliminarCarritoxProducto 
} from '../controllers/carritoxProductoController.js';

const router = express.Router();

router.get('/', obtenerCarritosxProductosActivos);
router.get('/:id', obtenerCarritoxProductoPorId);
router.post('/', crearCarritoxProducto);
router.put('/:id', actualizarCarritoxProducto);
router.delete('/:id', eliminarCarritoxProducto);


export default router;