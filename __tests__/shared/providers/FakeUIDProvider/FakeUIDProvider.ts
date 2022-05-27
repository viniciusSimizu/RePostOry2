import {SpyFakeUIDProvider} from "./SpyFakeUIDProvider";
import {IFakeUIDProvider} from "./IFakeUIDProvider";

export default class FakeUIDProvider extends SpyFakeUIDProvider implements IFakeUIDProvider{

    async uidGenerate(): Promise<string> {
        this.uidGenerateCount++;
        return 'uuid';
    }

}