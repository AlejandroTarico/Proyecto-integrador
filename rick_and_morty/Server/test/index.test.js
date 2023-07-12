const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image" ', async () => {
            const {body} = await agent.get('/rickandmorty/character/1');
            expect(body).toHaveProperty("id");
            expect(body).toHaveProperty("name");
            expect(body).toHaveProperty("species");
            expect(body).toHaveProperty("gender");
            expect(body).toHaveProperty("status");
            expect(body).toHaveProperty("origin");
            expect(body).toHaveProperty("image");
        });

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/-1').expect(500);
        });    
    })
    
    describe('GET /rickandmorty/login', () => {
        it('Responde con true para las credenciales correctas', async () =>{
            const {body} = await agent.get('/rickandmorty/login?email=jano@admin.com&password=alejo1234');
            expect(body).toEqual({  // NOTA: esta es una forma de poder probar si los datos son correctos o no
                access:true, 
            });
        });

        it('Responde con false para las credenciales inrrectas', async () =>{
            const {body} = await agent.get('/rickandmorty/login?email=jano@admin.com&password=alejo124');
            expect(body.access).toEqual(false);  // NOTA: esta es otra forma de poder probar si los datos son correctos o no 
        });
    });

    describe('POST /rickandmorty/fav', () => {
        const character1 = {
            id: 123,
            name: 'Morty',
            gender: 'male',
            status: 'alive'
        }
        const character2 = {
            id: 100,
            name: 'Fart',
            gender: 'alien',
            status: 'dead'
        }
        it('Devuelve un array creado en base al personaje enviado', async () => {
            const {body} = await agent.post("/rickandmorty/fav").send(character1)
            expect(body).toBeInstanceOf(Array) // De esta forma controlo que lo que viene por body sea un array. 
            expect(body).toContainEqual(character1) // Y con esta linea compruebo que sea una instancia de charater1 y que sea igual a lo que viene por body
        })

        it('Si se envía otro character debe ser devuelto con los anteriores', async () => {
            const {body} = await agent.post("/rickandmorty/fav").send(character2)
            expect(body).toBeInstanceOf(Array) 
            expect(body).toContainEqual(character1) 
            expect(body).toContainEqual(character2) 
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Debe devolver el arreglo con todos los personajes si no encuentra nungún personaje con el ID enviado', async () =>{
            const {body} = await agent.delete('/rickandmorty/fav/3')
            expect(body)
        })

        it('Debe eliminar correctamente el personaje', async () => {
            const {body} = await agent.delete('/rickandmorty/fav/3')
        })
        // Investigar las opciones de globalizacion de variables para mejorar este ejercicio con beforeach o beforall
    })
});