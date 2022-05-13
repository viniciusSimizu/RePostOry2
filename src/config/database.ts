export default (): {
    DB_DRIVER: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_REFERENCE: string;
} => ({
    DB_DRIVER: process.env.DB_DRIVER ?? 'mysql',
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: Number(process.env.DB_PORT) ?? 3306,
    DB_USERNAME: process.env.DB_USERNAME ?? 'root',
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_REFERENCE: process.env.DB_REFERENCE ?? 'dev_repostory'
})