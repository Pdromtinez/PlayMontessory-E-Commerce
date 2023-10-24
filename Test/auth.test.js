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

  // Clear any existing test user with the same email
  await User.destroy({ where: { user_email: userData.user_email } });

  // Register a new user
  const response = await request(app)
    .post('/playmontessori/register')
    .send(userData);

  // Expect a successful registration (HTTP status 201)
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('message', 'User Created');

  // Fetch the registered user from the database
  const registeredUser = await User.findOne({ where: { user_email: userData.user_email } });

  // Expect the user to exist
  expect(registeredUser).toBeTruthy();
});




// Test User Login
test('User Login', async () => {
  const userData = {
    user_email: 'test@example.com',
    user_password: 'password123',
  };

  // Hash the password to simulate stored password
  const hashedPassword = await bcrypt.hash(userData.user_password, saltRounds);

  // Create a user with the hashed password
  await User.create({
    user_email: userData.user_email,
    user_password: hashedPassword,
  });

  // Log in with the user's credentials
  const response = await request(app)
    .post('/playmontessori/login')
    .send({
      user_email: userData.user_email,
      user_password: userData.user_password,
    });

  // Expect a successful login (HTTP status 200)
  expect(response.status).toBe(200);

  // Verify the token and store it in the variable `token`
  const token = response.body; // Use the existing `token` variable

  // Expect the decoded token to contain the user's ID
  const decodedToken = jwt.verify(token, tokenSecret);
  expect(decodedToken).toHaveProperty('userId');
});
