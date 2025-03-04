const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Reserva = sequelize.define("Reserva", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_id: { type: DataTypes.INTEGER, allowNull: false},
    servicio_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATEONLY, allowNull: false }
}, { timestamps: false });

module.exports = Reserva;
