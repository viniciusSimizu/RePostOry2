export default (): {
    GIT_AUTH_TOKEN: string;
} => ({
    GIT_AUTH_TOKEN: process.env.GIT_TOKEN
})