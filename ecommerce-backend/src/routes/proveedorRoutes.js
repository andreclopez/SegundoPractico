import express from 'express';
import { 
    obtenerProveedoresActivos, 
    obtenerProveedorPorCuit, 
    crearProveedor, 
    actualizarProveedor, 
    eliminarProveedor 
} from '../controllers/proveedorController.js';

const router = express.Router();

router.get('/', obtenerProveedoresActivos);
router.get('/:id', obtenerProveedorPorCuit);
router.post('/', crearProveedor);
router.put('/:id', actualizarProveedor);
router.delete('/:id', eliminarProveedor);


export default router;