import express from 'express';
import { obtenerMensajePorProducto, crearMensaje, obtenerTodosLosMensajes, obtenerMensajePorId, actualizarMensaje, eliminarMensaje } from '../controllers/mensajeController.js';

const router = express.Router({ mergeParams: true });

router.get('/', obtenerTodosLosMensajes);
router.get('/:id', obtenerMensajePorId);
router.get('/', obtenerMensajePorProducto);
router.post('/', crearMensaje);
router.put('/:id', actualizarMensaje);
router.delete('/:id', eliminarMensaje);

export default router;