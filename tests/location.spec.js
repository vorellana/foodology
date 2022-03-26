const request = require('supertest')
const app = require('../src/app')
const urlBase = '/api-foodology';
const urlLocation = urlBase + '/location';

describe('GET ' + urlLocation, () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get(urlLocation);
        expect(response.statusCode).toBe(200);
    })
    test('should respond with a json', async () => {
        const response = await request(app).get(urlLocation);
        expect(response.body).toBeInstanceOf(Object);
    })    
    test('should respond with a Content-type: application/json header', async () => {
        const response = await request(app).get(urlLocation);
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    })
})
