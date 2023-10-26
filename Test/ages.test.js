import request from 'supertest';
import { app } from '../Server/app.js';
import { test, expect, describe, beforeAll, afterAll } from "@jest/globals";
import { AgeFilter } from '../Server/models/ageFilter.js';

test('get', async () => {
  const response = await request(app).get('/playmontessori/ages');
  expect(response.status).toBe(200);
});

describe("Test de CRUD ages", () => {
  let createdAge;

  beforeAll(async () => {
    createdAge = await AgeFilter.create({
      age_range: "hola"
    });
  });

  afterAll(async () => {
    await AgeFilter.destroy({ where: { id: createdAge.id } });
  });

  describe('POST /ages', () => {
    const newAge = {
      age_range: "hola"
    };

    test('should return a response with status 200 and type json', async () => {
      const response = await request(app).post('/playmontessori/ages').send(newAge);
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });

    // Eliminamos la prueba del mensaje
  });

  describe('PUT /ages', () => {
    test('should return a response with status 200 and update successfully', async () => {
      const response = await request(app).put(`/playmontessori/ages/${createdAge.id}`).send({ "age_range": "update test" });
      expect(response.status).toBe(200);
    });
  });

  describe('DELETE /ages', () => {
    test('should return a response with status 204 and delete successfully', async () => {
      const response = await request(app).delete(`/playmontessori/ages/${createdAge.id}`).send();
      expect(response.status).toBe(204);
    });

  });
});
