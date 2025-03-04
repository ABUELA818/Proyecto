const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Servicio = sequelize.define("Servicio", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    duracion: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

module.exports = Servicio;
