const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
       await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });
    
    it('should be able to create an ONG', async () => {
        const response =  await request(app).
        post('/ongs')
        .send({
            name: "APAV",
	        email: "contato@apav.com.br",
	        whatsapp: "8882822888",
	        city: "Camaquã",
	        uf: "RS"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

/**
 * vamos usar o supertest ao inves do axios
 */