const request = require("supertest");
const app = require("../app");
const Usuario = require("../models/Usuario");

describe("Pruebas de Usuario API", () => {
    beforeEach(async () => {
        await Usuario.destroy({ where: {} });
    });

    it("Debe crear un usuario", async () => {
        const nuevoUsuario = {
            nombre: "Juan Pérez",
            email: "juan@example.com",
            contraseña: "123456",
            rol: "cliente"
        };

        const res = await request(app)
            .post("/api/usuarios/crear")
            .send(nuevoUsuario);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
    });

    it("Debe obtener una lista de usuarios", async () => {
        const res = await request(app).get("/api/usuarios");

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
