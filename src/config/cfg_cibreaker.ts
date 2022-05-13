export default (): {
    TIMEOUT: number;
    ERROR_PORCENTAGE: number;
    RESET_TIMEOUT: number;
} => ({
    TIMEOUT: Number(process.env.C_TIMEOUT),
    ERROR_PORCENTAGE: Number(process.env.C_ERROR_PORCENTAGE),
    RESET_TIMEOUT: Number(process.env.C_RESET_TIMEOUT)
})