import {IUIDProvider} from '../IUIDProvider';
import { v4 as uuid } from 'uuid';

export class UUIDProvider implements IUIDProvider {

    async uidGenerate(): Promise<string> {
        return await uuid();
    }

}