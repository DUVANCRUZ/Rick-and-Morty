const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTA", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("`Responde con status: 200", async()=>{
            const response= await agent.get("/rickandmorty/character/1");
            expect(response.statusCode).toBe(200)
        })

    })
})