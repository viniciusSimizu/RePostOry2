import {IUIDProvider} from "../../../../src/shared/providers/UIDProvider/IUIDProvider";

class spyFakeUIDProvider {
    protected uidGenerateCount = 0;
}

export default class fakeUIDProvider extends spyFakeUIDProvider implements IUIDProvider {
    uidGenerate(): Promise<string> {
        this.uidGenerateCount++;
        return Promise.resolve('_UUID_');
    }
}