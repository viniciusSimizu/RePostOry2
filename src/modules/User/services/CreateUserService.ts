import {inject, injectable} from "tsyringe";
import IUserRepository from "../dtos/IUserRepository";
import {IUserDTO} from "../dtos/IUserDTO";
import {IEncodeProvider} from "../../../shared/providers/EncodeProvider/IEncodeProvider";
import {IEmailValidateProvider} from "../../../shared/providers/MailValidationProvider/IEmailValidateProvider";
import {IUIDProvider} from "../../../shared/providers/UIDProvider/IUIDProvider";

@injectable()
export default class CreateUserService {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('EncodeProvider')
        private encodeProvider: IEncodeProvider,
        @inject('EmailValidateProvider')
        private emailValidateProvider: IEmailValidateProvider,
        @inject('UIDProvider')
        private uidProvider: IUIDProvider
    ) {}

    async execute(data: IUserDTO): Promise<IUserDTO | null | unknown> {

        if(!await this.emailValidateProvider.validate(data.email)) {
            throw new Error('Email invalid')
        }

        // uid = UUID + timestamp
        const uid = await this.uidProvider.uidGenerate() + String(Date.now());
        const hashedPassword = await this.encodeProvider.encode(data.password);

        try {
            return await this.userRepository.create({
                ...data,
                id: uid,
                password: hashedPassword
            });
        } catch (e) {
            console.log(e)
            throw new Error('User already exist');
        }

    }

}