import request  from "supertest";
import db from "../database/db.js";
import {app} from "../app.js"
import Product from "../models/products.js";




describe("Test de CRUD products",() =>{
    describe("GET /playmontessori/products", () =>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/playmontessori/products').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all products",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })


describe('POST /products',() =>{ 

        const newToy = {
            product_image: "hola",
                product_title: "hola",
                product_description: "hola",
                product_brand: "hey",
                product_price: 200,
                product_stock: 200,

        }

        const wrongToy = {
            wrong_field:'test',
            category_id: 2,
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/playmontessori/products').send(newToy)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message Shoe created successfully', async () =>{
            const response = await request(app).post('/playmontessori/products').send(newToy)
            expect(response.body.message).toContain("You has create a new product")
        })

        test('should return a message insertion error If post wrong Shoe ', async () =>{
            const response = await request(app).post('/playmontessori/products').send(wrongToy)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("The Operation has failed fantastically")
        }) 

    })

    describe('PUT /products', () =>{
        let createdToy = [];
        beforeEach(async () => {
            createdToy = await Product.create({ 
                product_image: "hola",
                product_title: "hola",
                product_description: "hola",
                product_brand: "hey",
                product_price: 200,
                product_stock: 200

            });
        });

        afterAll(async() =>{
            await Product.destroy({where:{ id: createdToy.id}})
        })

        test('should return a response with status 200 and update successfully', async () => {
            const response = await request(app).put(`/playmontessori/products/${createdToy.id}`).send({"product_title": "update test"});
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Update product successfully",)
        })
    })

    describe('DELETE /products', () =>{
        let createdToy = {};
        beforeEach(async () => {
            createdToy = await Product.create({ 
                product_image: "hola",
                product_title: "hola",
                product_description: "hola",
                product_brand: "hey",
                product_price: 200,
                product_stock: 200
            });
        });

        test('should return a response with status 200 and delete successfully', async () => {
            const response = await request(app).delete(`/playmontessori/products/${createdToy.id}`).send();
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Product deleted successfully")
        })
    })

})