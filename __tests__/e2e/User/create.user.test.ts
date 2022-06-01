import request from 'supertest';
import app from "../../../src/shared/infra/http/app";
import dataSource from "../../../src/shared/infra/typeorm";
import {DataSource} from "typeorm";
import {Server} from "net";

describe('Create User', () => {

    jest.setTimeout(10000)

    let connection: DataSource, server: Server;

    beforeAll(async () => {
        connection = await dataSource.initialize();
        await connection.synchronize();
        server = app.listen(3000);
    });

    afterAll(async () => {
        await connection.close();
        server.close();
    })

    it('should create a new user', async () => {

        const user = {
            username: 'testandomuito',
            email: 'emailnormal@testando.com',
            password: 'teste',
        }

        const response = await request(app)
            .post('/v2/repostory/auth/register')
            .send(user)
            .set('Accept', 'application/json');

        expect(response.status)
            .toBe(201);
    });

});