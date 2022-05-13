import {injectable} from "tsyringe";
import {IEncodeProvider} from "../IEncodeProvider";
import {compare, hash} from "bcryptjs";
import cfg_sha512 from "../../../../config/cfg_sha512";

@injectable()
export class BCryptEncodeProvider implements IEncodeProvider {

    private readonly cfg_sha512: { SALT: number }

    constructor() {
        this.cfg_sha512 = cfg_sha512();
    }

    async decode(plain: string, hashed: string): Promise<boolean> {
        return await compare(plain, hashed);
    }

    async encode(plain: string): Promise<string> {
        return await hash(plain, this.cfg_sha512.SALT);
    }

}