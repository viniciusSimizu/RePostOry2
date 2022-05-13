import {IJWTProvider} from "../IJWTProvider";
import { sign, verify } from "jsonwebtoken";
import cfg_jwt from "../../../../config/cfg_jwt";

export default class JsonWebTokenProvider implements IJWTProvider {

    private readonly cfg_jwt: { JWT_SECRET: string, JWT_EXPIRATION_TIME: string | number };

    constructor() {
        this.cfg_jwt = cfg_jwt();
    }

    async sign(id: string): Promise<string> {
        return await sign(
            {},
            this.cfg_jwt.JWT_SECRET,
            {
                subject: id,
                expiresIn: this.cfg_jwt.JWT_EXPIRATION_TIME
            });
    }

    async verify(token: string): Promise<any> {
        return await verify(token, this.cfg_jwt.JWT_SECRET);
    }

}