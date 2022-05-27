import {IFakeEncodeProvider} from "./IFakeEncodeProvider";
import {SpyFakeEncodeProvider} from "./SpyFakeEncodeProvider";

export default class FakeEncodeProvider extends SpyFakeEncodeProvider implements IFakeEncodeProvider{

    async decode(plain: string, hashed: string): Promise<boolean> {
        this.decodeCount++;
        return true;
    }

    async encode(plain: string): Promise<string> {
        this.encodeCount++;
        return plain;
    }

}