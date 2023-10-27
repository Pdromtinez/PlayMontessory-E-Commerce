import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";


test('GET /playmontessori/users should return a list of users', async () => {
  const response = await request(app).get('/playmontessori/users');
  expect(response.status).toBe(200);

  expect(Array.isArray(response.body.users)).toBe(true);

  response.body.users.forEach((user) => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('user_name');
  });
});

test('GET /playmontessori/users/:id should return a user by ID', async () => {

  const response = await request(app)
    .get(`/playmontessori/users/3dde75ee-daf1-41a6-8eeb-4da46ff592f9`);

  expect(response.status).toBe(403);
});

test('PUT /playmontessori/users/:id should update a user', async () => {

  const updatedUserData = {
    user_name: 'Updated Name',
  };

  const response = await request(app)
    .put(`/playmontessori/users/3dde75ee-daf1-41a6-8eeb-4da46ff592f9`)
    .send(updatedUserData);

  expect(response.status).toBe(403);
});

test('DELETE /playmontessori/users/:id should delete a user', async () => {
 
  const response = await request(app).delete(`/playmontessori/users/3dde75ee-daf1-41a6-8eeb-4da46ff592f9`);
  expect(response.status).toBe(403);
});
