const request = require('supertest')
const app = require('../src/app')
const { payload1, payload2, payload3 } = require('./test-data')
const urlBase = '/v1/b-trees';
const urlHeight = urlBase + '/height';
const urlNeighbors = urlBase + '/neighbors';
const urlBfs = urlBase + '/bfs';

describe('POST ' + urlHeight, () => {
    test('The input payload must have property toTree', () => {
        expect(payload1).toHaveProperty('toTree');
    })
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post(urlHeight).send(payload1);
        expect(response.statusCode).toBe(200);
    })
    test('should respond with a json', async () => {
        const response = await request(app).post(urlHeight).send(payload1);
        expect(response.body).toBeInstanceOf(Object);
    })    
    test('should respond with a Content-type: application/json header', async () => {
        const response = await request(app).post(urlHeight).send(payload1);
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    })
})

describe('POST ' + urlNeighbors, () => {
    test('The input payload must have property toTree', () => {
        expect(payload2).toHaveProperty('toTree');
    })
    test('The input payload must have property node', () => {
        expect(payload2).toHaveProperty('node');
    })
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post(urlNeighbors).send(payload2);
        expect(response.statusCode).toBe(200);
    })
    test('should respond with a json', async () => {
        const response = await request(app).post(urlNeighbors).send(payload2);
        expect(response.body).toBeInstanceOf(Object);
    })    
    test('should respond with a Content-type: application/json header', async () => {
        const response = await request(app).post(urlNeighbors).send(payload2);
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    })
})

describe('POST ' + urlBfs, () => {
    test('The input payload must have property toTree', () => {
        expect(payload3).toHaveProperty('toTree');
    })
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post(urlBfs).send(payload3);
        expect(response.statusCode).toBe(200);
    })
    test('should respond with a json', async () => {
        const response = await request(app).post(urlBfs).send(payload3);
        expect(response.body).toBeInstanceOf(Object);
    })    
    test('should respond with a Content-type: application/json header', async () => {
        const response = await request(app).post(urlBfs).send(payload3);
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    })
})
