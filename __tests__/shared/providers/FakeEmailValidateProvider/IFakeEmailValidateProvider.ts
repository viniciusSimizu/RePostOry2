export interface IFakeEmailValidateProvider {
    validateCount: number;

    validate(email: string): Promise<boolean>;
}