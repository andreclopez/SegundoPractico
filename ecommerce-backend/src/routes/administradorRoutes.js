import express from 'express';
import { 
    obtenerAdministradores, 
    obtenerAdministradorPorId, 
    crearAdministrador, 
    actualizarAdministrador, 
    eliminarAdministrador 
} from '../controllers/administradorController.js';

const router = express.Router();

router.get('/', obtenerAdministradores);
router.get('/:id', obtenerAdministradorPorId);
router.post('/', crearAdministrador);
router.put('/:id', actualizarAdministrador);
router.delete('/:id', eliminarAdministrador);


export default router;