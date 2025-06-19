import express from 'express';
import { 
    obtenerCuponesActivos, 
    obtenerCuponPorId, 
    crearCupon, 
    actualizarCupon, 
    eliminarCupon 
} from '../controllers/cuponDescuentoController.js';

const router = express.Router();

router.get('/', obtenerCuponesActivos);
router.get('/:id', obtenerCuponPorId);
router.post('/', crearCupon);
router.put('/:id', actualizarCupon);
router.delete('/:id', eliminarCupon);


export default router;