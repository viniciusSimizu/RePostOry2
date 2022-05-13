export default (): {
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string | number;
} => ({
    JWT_SECRET: process.env.SECRET_KEY,
    JWT_EXPIRATION_TIME: process.env.EXPIRATION_TIME
})