import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";
import { User } from '../Server/models/Users.js';
import bcrypt from "bcrypt"

let lastCreatedUserId; 


test('POST /playmontessori/users should create a new user', async () => {
    const userData = { 
      user_name: "Aron",
      user_lastname: "g",
      user_email: "Aron@gmail.com",
      user_password: "contraseña123",
    };
  
    const response = await request(app)
      .post('/playmontessori/users')
      .send(userData);
  
    expect(response.status).toBe(200);
  
    expect(response.body).toHaveProperty('id');
    expect(response.body.user_name).toBe(userData.user_name);
    expect(response.body.user_lastname).toBe(userData.user_lastname);
    expect(response.body.user_email).toBe(userData.user_email);
  
    // Compare el hash de la contraseña almacenada en la base de datos
    const user = await User.findByPk(response.body.id);
    const isPasswordValid = await bcrypt.compare(userData.user_password, user.user_password);
    expect(isPasswordValid).toBe(true);
    
    lastCreatedUserId = response.body.id;
  });
  
test('GET /playmontessori/users should return a list of users', async () => {
  const response = await request(app).get('/playmontessori/users');
  expect(response.status).toBe(200);

  expect(Array.isArray(response.body)).toBe(true);

  response.body.forEach((user) => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('user_name');
    expect(user).toHaveProperty('user_lastname');
    expect(user).toHaveProperty('user_email');
    expect(user).toHaveProperty('user_password');
  });
});


test('GET /playmontessori/users:id should return a user by ID', async () => {
  if (!lastCreatedUserId) {
    throw new Error('No se ha creado ningún producto para este test.');
  }


  const response = await request(app)
    .get(`/playmontessori/users/${lastCreatedUserId}`);

  expect(response.status).toBe(200);

  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('user_name');
  expect(response.body).toHaveProperty('user_lastname');
  expect(response.body).toHaveProperty('user_email');
  expect(response.body).toHaveProperty('user_password');
});


test('PUT /playmontessori/users:id should update a user', async () => {
    if (!lastCreatedUserId) {
      throw new Error('No se ha creado ningún producto para este test.');
    }
    
    const updatedUserData = {
      user_name: 'Updated user Name',
      user_lastname: 'update lastname',
      user_email: 'Updated email',
      user_password: 'Updated email'
    };
  
    const response = await request(app)
      .put(`/playmontessori/users/${lastCreatedUserId}`)
      .send(updatedUserData);
  
    expect(response.status).toBe(200);
  
    expect(response.body.user).toHaveProperty('id', lastCreatedUserId);
    expect(response.body.user).toHaveProperty('user_name', updatedUserData.user_name);
    expect(response.body.user).toHaveProperty('user_lastname', updatedUserData.user_lastname);
    expect(response.body.user).toHaveProperty('user_email', updatedUserData.user_email);
    expect(response.body.user).toHaveProperty('user_password', updatedUserData.user_password);
  });
  
test('should delete a user', async () => {
  if (!lastCreatedUserId) {
    throw new Error('No se ha creado ningún producto para este test.');
  }


  const response = await request(app)
    .delete(`/playmontessori/users/${lastCreatedUserId}`);

  expect(response.status).toBe(204);
  
});

