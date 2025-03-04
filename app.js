require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");
const servicioRoutes = require("./routes/servicioRoutes");
const reservaRoutes = require("./routes/reservaRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/servicios", servicioRoutes);
app.use("/api/reservas", reservaRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;