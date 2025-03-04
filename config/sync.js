const sequelize = require("./config/database");
const Usuario = require("./models/Usuario");
const Servicio = require("./models/Servicio");
const Reserva = require("./models/Reserva");

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Base de datos sincronizada correctamente.");
        process.exit();
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
})();

