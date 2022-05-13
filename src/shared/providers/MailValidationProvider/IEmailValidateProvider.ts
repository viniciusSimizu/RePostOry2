export interface IEmailValidateProvider {
    validate(email: string): Promise<boolean>;
}