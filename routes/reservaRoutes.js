const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");

router.post("/crear", reservaController.crearReserva);
router.get("/obtener", reservaController.obtenerReservas);

module.exports = router;
