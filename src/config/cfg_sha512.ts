export default (): { SALT: number } => ({
    SALT: Number(process.env.HASH_SALT)
})