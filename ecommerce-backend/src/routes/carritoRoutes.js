import express from 'express';
import { 
    obtenerCarritosActivos, 
    obtenerCarritoPorId, 
    crearCarrito, 
    actualizarCarrito, 
    eliminarCarrito 
} from '../controllers/carritoController.js';

const router = express.Router();

router.get('/', obtenerCarritosActivos);
router.get('/:id', obtenerCarritoPorId);
router.post('/', crearCarrito);
router.put('/:id', actualizarCarrito);
router.delete('/:id', eliminarCarrito);


export default router;