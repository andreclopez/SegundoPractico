import express from 'express';
import {
    obtenerCategoriasActivas, 
    obtenerCategoriaPorId, 
    crearCategoria, 
    actualizarCategoria, 
    eliminarCategoria 
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', obtenerCategoriasActivas);
router.get('/:id', obtenerCategoriaPorId);
router.post('/', crearCategoria);
router.put('/:id', actualizarCategoria);
router.delete('/:id', eliminarCategoria);


export default router;