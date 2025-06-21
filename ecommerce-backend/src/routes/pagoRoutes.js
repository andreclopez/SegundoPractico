import express from 'express';
import { 
    obtenerPagosActivos, 
    obtenerPagoPorId, 
    crearPago, 
    actualizarPago, 
    eliminarPago 
} from '../controllers/pagoController.js';

const router = express.Router();

router.get('/', obtenerPagosActivos);
router.get('/:id', obtenerPagoPorId);
router.post('/', crearPago);
router.put('/:id', actualizarPago);
router.delete('/:id', eliminarPago);


export default router;