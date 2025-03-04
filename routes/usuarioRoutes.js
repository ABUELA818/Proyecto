const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/crear", usuarioController.crearUsuario);
router.get("/obtener", usuarioController.obtenerUsuarios);

module.exports = router;
