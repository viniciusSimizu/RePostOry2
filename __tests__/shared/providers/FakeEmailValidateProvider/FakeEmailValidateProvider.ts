import {IEmailValidateProvider} from "../../../../src/shared/providers/MailValidationProvider/IEmailValidateProvider";
import {SpyFakeEmailValidateProvider} from "./SpyFakeEmailValidateProvider";

export default class FakeEmailValidateProvider extends SpyFakeEmailValidateProvider implements IEmailValidateProvider{

    async validate(email: string): Promise<boolean> {
        this.validateCount++;
        return true;
    }

}