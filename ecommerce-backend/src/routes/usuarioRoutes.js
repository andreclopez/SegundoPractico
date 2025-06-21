import express from 'express';
import { 
    obtenerUsuariosActivos, 
    obtenerUsuarioPorId, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario 
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', obtenerUsuariosActivos);
router.get('/:id', obtenerUsuarioPorId);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);


export default router;