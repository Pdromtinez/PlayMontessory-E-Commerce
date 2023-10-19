import request  from "supertest";
import {app} from "../app.js"
import AgeFilter from "../models/ageFilter.js";




describe("Test de CRUD ages",() =>{
    describe("GET /playmontessori/ages", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/playmontessori/ages').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all ages",async() => {
            expect(response.body).toBeInstanceOf(Object);
        })
    })


describe('POST /ages',() =>{ 

        const  newAge= {
            age_range: "hola"
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/playmontessori/ages').send(newAge)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message Shoe created successfully', async () =>{
            const response = await request(app).post('/playmontessori/ages').send(newAge)
            expect(response.body.message).toContain("You has create a new age range")
        })

    })

    describe('PUT /ages', () =>{
        let createdAge = [];
        beforeEach(async () => {
            createdAge = await AgeFilter.create({ 
                age_range: "hola"
            });
        });

        afterAll(async() =>{
            await AgeFilter.destroy({where:{ id: createdAge.id}})
        });

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/playmontessori/ages/${createdAge.id}`).send({"age_range": "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Update product successfully")
        })
    })

    describe('DELETE /ages', () =>{
        let createdAge = {};
        beforeEach(async () => {
            createdAge = await AgeFilter.create({ 
                age_range: "hola"
            });
        });

        test('should return a response with status 200 and delete successfully', async () => {
            const response = await request(app).delete(`/playmontessori/ages/${createdAge.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Product deleted successfully")
        })
    })

})

