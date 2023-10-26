import request from 'supertest';
import { app } from '../Server/app.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { test, expect } from "@jest/globals";
import { User } from '../Server/models/Users.js';
import { tokenSecret } from '../Server/config.js';

const saltRounds = 10;

test('User Registration', async () => {
  const userData = {
    user_name: 'TestUser',
    user_lastname: 'TestLastName',
    user_email: 'test@example.com',
    user_password: 'password123',
  };


  await User.destroy({ where: { user_email: userData.user_email } });

  const response = await request(app)
    .post('/playmontessori/register')
    .send(userData);
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('message', 'User Created');

 
  const registeredUser = await User.findOne({ where: { user_email: userData.user_email } });
  expect(registeredUser).toBeTruthy();
});


test('User Login', async () => {
  const userData = {
    user_email: 'test@example.com',
    user_password: 'password123',
  };

  const hashedPassword = await bcrypt.hash(userData.user_password, saltRounds);

  await User.create({
    user_email: userData.user_email,
    user_password: hashedPassword,
  });

  const response = await request(app)
    .post('/playmontessori/login')
    .send({
      user_email: userData.user_email,
      user_password: userData.user_password,
    });

  expect(response.status).toBe(200);
  const token = response.body;

  const decodedToken = jwt.verify(token, tokenSecret);
  expect(decodedToken).toHaveProperty('sub');
});
