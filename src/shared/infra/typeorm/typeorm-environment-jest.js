/**
 * @jest-environment ./src/shared/infra/typeorm/typeorm-environment-jest
 */

const NodeEnvironment = require('jest-environment-node');
const { v4: uuid } = require('uuid');
const {execSync} = require("child_process");
const {resolve} = require("path");
const dataSource = require("./index");

const typeormCli = 'node_modules/typeorm/cli.js';

require('dotenv').config({
    path: resolve(
        __dirname,
        '..',
        '..',
        '..',
        '.env',
    )
});

class CustomEnvironment extends NodeEnvironment {

    constructor(config) {
        super(config);
        this.schema = `code_schema_${uuid()}`;
    }

    setup() {
        process.env.DB_DROPSCHEMA = true;
        process.env.DB_REFERENCE = this.schema;
        this.global.process.env.DB_REFERENCE = this.schema;

        execSync(`${typeormCli} migration:run -d src/shared/infra/typeorm`);
    }

    async teardown() {
        const connection = await dataSource.connect();
        await connection.dropDatabase();
        connection.close();
    }

}

module.exports = CustomEnvironment;