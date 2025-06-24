import { Mensaje } from '../models/index.js';

export const obtenerMensajePorProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const mensajes = await Mensaje.findAll({
            where: { idProducto }
        });
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes'});
    }
};

export const crearMensaje = async (req, res) => {
    try{ 
        const { idProducto } = req.params;
        const { texto } = req.body;

        const nuevoMensaje = await Mensaje.create({ texto, idProducto });
        res.status(201).json(nuevoMensaje)
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el mensaje' });

    }
};