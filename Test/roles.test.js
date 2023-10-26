import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";

let lastCreatedRoleId; 



test('POST /playmontessori/roles should create a new role', async () => {
  const rolesData = { user_role: 'client' };

  const response = await request(app)
    .post('/playmontessori/roles')
    .send(rolesData);

  expect(response.status).toBe(200);

  expect(response.body).toHaveProperty('id');
  expect(response.body.user_role).toBe(rolesData.user_role);

  lastCreatedRoleId = response.body.id;
});



test('GET /playmontessori/roles should return a list of roles', async () => {
  const response = await request(app).get('/playmontessori/roles');
  expect(response.status).toBe(200);

  expect(Array.isArray(response.body)).toBe(true);

  response.body.forEach((role) => {
    expect(role).toHaveProperty('id');
    expect(role).toHaveProperty('user_role');

  });
});


test('GET /playmontessori/roles:id should return a role by ID', async () => {
  if (!lastCreatedRoleId) {
    throw new Error('No se ha creado ningún producto para este test.');
  }


  const response = await request(app)
    .get(`/playmontessori/roles/${lastCreatedRoleId}`);

  expect(response.status).toBe(200);

  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('user_role');

});


test('PUT /playmontessori/roles/:id should update a user', async () => {
  if (!lastCreatedRoleId) {
    throw new Error('No se ha creado ningún role para este test.');
  }

  
  const updatedRoleData = {
    user_role: 'Updated user role',
  };

  const response = await request(app)
    .put(`/playmontessori/roles/${lastCreatedRoleId}`)
    .send(updatedRoleData);

  expect(response.status).toBe(200);

  expect(response.body).toHaveProperty('id', lastCreatedRoleId);
  expect(response.body).toHaveProperty('user_role', updatedRoleData.user_role);
});

