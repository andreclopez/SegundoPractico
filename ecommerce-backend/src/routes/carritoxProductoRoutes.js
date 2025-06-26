import express from 'express';
import { 
    obtenerCarritosxProductosActivos, 
    obtenerCarritoxProductoPorId, 
    crearCarritoxProducto,
    actualizarCarritoxProducto, 
    eliminarCarritoxProducto 
} from '../controllers/carritoxProductoController.js';

const router = express.Router();

router.get('/', obtenerCarritosxProductosActivos);       // Listar todos
router.get('/:id', obtenerCarritoxProductoPorId);        // Buscar por ID
router.post('/', crearCarritoxProducto);                 // Crear nuevo registro
router.put('/:id', actualizarCarritoxProducto);          // Actualizar por ID
router.delete('/:id', eliminarCarritoxProducto);         // Eliminar por ID

export default router;
