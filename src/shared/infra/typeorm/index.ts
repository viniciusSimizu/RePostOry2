import 'reflect-metadata';
import 'dotenv/config';
import database from '../../../config/database';
import {DataSource} from "typeorm";
import {resolve} from 'path';

const cfg_database = database();

const dataSource = new DataSource({
    type: 'mysql',
    host: cfg_database.DB_HOST,
    port: cfg_database.DB_PORT,
    username: cfg_database.DB_USERNAME,
    password: cfg_database.DB_PASSWORD,
    database: cfg_database.DB_REFERENCE,
    synchronize: false,
    logger: 'file',
    entities: [
        resolve(__dirname, 'entities/*.{ts,js}'),
        resolve(
            __dirname,
            '..',
            '..',
            '..',
            'modules/**/infra/typeorm/entities/**/*.{ts,js}'
        ),
    ],
    migrations: [
        resolve(__dirname, 'migrations/*.ts')
    ]
});

export async function initializeDatabase(): Promise<void> {
    await dataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch(err => {
            console.error("Error during Data Source initialization", err)
        })
};

export default dataSource;