import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";

test('POST /playmontessori/roles should create a new age filter', async () => {
  const roleData = {
    age_range: 'client',
  };

  const response = await request(app)
    .post('/playmontessori/roles')
    .send(roleData);

  expect(response.status).toBe(400);
});



test('GET /playmontessori/roles should return a list of roles', async () => {
  const response = await request(app).get('/playmontessori/roles');
  expect(response.status).toBe(200);
});


test('GET /playmontessori/roles:id should return a role by ID', async () => {


  const response = await request(app)
    .get(`/playmontessori/roles/$22ff79a5-0a24-4bc4-8ff0-576a3f53fe10`);

  expect(response.status).toBe(404);
});


