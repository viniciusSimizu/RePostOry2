import {IEmailValidateProvider} from "../IEmailValidateProvider";
import {validate} from "email-validator";

export class EmailValidateProvider implements IEmailValidateProvider {

    async validate(email: string): Promise<boolean> {
        return await validate(email);
    }

}