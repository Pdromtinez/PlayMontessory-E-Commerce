import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";

test('POST /playmontessori/products authorization denied', async () => {
  const productData = { 
    product_title: 'Sample Product',

  };
  const response = await request(app)
    .post('/playmontessori/products')
    .send(productData);

  expect(response.status).toBe(400);
});

test('GET /playmontessori/products should return a list of products', async () => {
  const response = await request(app).get('/playmontessori/products');
  expect(response.status).toBe(200);
});

test('GET /playmontessori/products/:id should return a product by ID', async () => {
  const response = await request(app)
    .get(`/playmontessori/products/0c0aa18b-5049-4a42-a33c-20f9881d213a`);

  expect(response.status).toBe(200);

  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('product_title');
});


