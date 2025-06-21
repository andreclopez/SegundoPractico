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
router.get('/:cuit', obtenerProveedorPorCuit);
router.post('/', crearProveedor);
router.put('/:cuit', actualizarProveedor);
router.delete('/:cuit', eliminarProveedor);


export default router;