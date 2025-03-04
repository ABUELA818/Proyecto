const Servicio = require("../models/Servicio");

exports.crearServicio = async (req, res) => {
    try {
        const servicio = await Servicio.create(req.body);
        res.status(201).json(servicio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findAll();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
