import {IEmailValidateProvider} from "../../../../src/shared/providers/MailValidationProvider/IEmailValidateProvider";

class spyFakeEmailValidateProvider {
    protected validateCount = 0;
}

export default class fakeEmailValidateProvider extends spyFakeEmailValidateProvider implements IEmailValidateProvider{
    validate(email: string): Promise<boolean> {
        this.validateCount++;
        return Promise.resolve(true);
    }
}