export default (): {
    API_PORT: number;
    API_BASEURL: string;
} => ({
    API_PORT: Number(process.env.PORT) ?? 3000,
    API_BASEURL: process.env.API_BASEURL ?? '/v2/repostory'
})