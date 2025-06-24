import express from 'express';
import { obtenerMensajePorProducto, crearMensaje } from '../controllers/mensajeController.js';

const router = express.Router({ mergeParams: true });

router.get('/', obtenerMensajePorProducto);
router.post('/', crearMensaje);

export default router;