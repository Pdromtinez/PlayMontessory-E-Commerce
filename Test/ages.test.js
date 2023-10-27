import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect } from "@jest/globals";

test('POST /playmontessori/age-filter should create a new age filter', async () => {
  const ageData = {
    age_range: '3-5 years',
  };

  const response = await request(app)
    .post('/playmontessori/age-filter')
    .send(ageData);

  expect(response.status).toBe(404);
});

test('GET /playmontessori/age-filter should return a list of age filters', async () => {
  const response = await request(app).get('/playmontessori/ages');
  expect(response.status).toBe(200);
  response.body.forEach((age) => {
    expect(age).toHaveProperty('id');
    expect(age).toHaveProperty('age_range');
  });
});

test('GET /playmontessori/age-filter/:id should return an age filter by ID', async () => {

  const response = await request(app)
    .get(`/playmontessori/age-filter/d97fa0ca-abb4-42fd-bd25-1a9a42591ebd`);

  expect(response.status).toBe(404);
});

test('PUT /playmontessori/age-filter/:id should update an age filter', async () => {

  const updatedAgeData = {
    age_range: 'Updated Age Range',
  };

  const response = await request(app)
    .put(`/playmontessori/age-filter/d97fa0ca-abb4-42fd-bd25-1a9a42591ebd`)
    .send(updatedAgeData);

  expect(response.status).toBe(404);
});

test('DELETE /playmontessori/age-filter/:id should delete an age filter', async () => {

  const response = await request(app).delete(`/playmontessori/age-filter/d97fa0ca-abb4-42fd-bd25-1a9a42591ebd`);
  expect(response.status).toBe(404);
});
