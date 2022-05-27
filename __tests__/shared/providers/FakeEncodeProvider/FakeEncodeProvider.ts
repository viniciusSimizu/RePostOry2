import {IEncodeProvider} from "../../../../src/shared/providers/EncodeProvider/IEncodeProvider";

class spyFakeEncodeProvider {
    protected decodeCount = 0;
    protected encodeCount = 0;
}

export default class fakeEncodeProvider extends spyFakeEncodeProvider implements IEncodeProvider {
    decode(plain: string, hashed: string): Promise<boolean> {
        this.decodeCount++;
        return Promise.resolve(false);
    }

    encode(plain: string): Promise<string> {
        this.encodeCount++;
        return Promise.resolve(plain);
    }

}