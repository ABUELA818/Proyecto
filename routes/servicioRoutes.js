const express = require("express");
const router = express.Router();
const servicioController = require("../controllers/servicioController");

router.post("/crear", servicioController.crearServicio);
router.get("/obtener", servicioController.obtenerServicios);

module.exports = router;
