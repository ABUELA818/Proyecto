const Reserva = require("../models/Reserva");

exports.crearReserva = async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(201).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
