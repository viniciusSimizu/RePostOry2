import {inject, injectable} from "tsyringe";
import IUserRepository from "../dtos/IUserRepository";
import {IEncodeProvider} from "../../../shared/providers/EncodeProvider/IEncodeProvider";
import {IJWTProvider} from "../../../shared/providers/JWTProvider/IJWTProvider";

interface ILoginUserRequest {
    email: string;
    password: string;
}

@injectable()
export default class LoginUserService {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('EncodeProvider')
        private encodeProvider: IEncodeProvider,
        @inject('JWTProvider')
        private jwtProvider: IJWTProvider
    ) {}

    async execute(data: ILoginUserRequest): Promise<string> {

        // Get user by email
        const user = await this.userRepository.findByEmail(data.email);

        if(!user) {
            throw new Error("User doesn't exist")
        }

        // Authenticates user's password
        const authenticity = await this.encodeProvider.decode(data.password, user.password);
        if(!authenticity) {
            throw new Error('Login invalid')
        }

        // Return jwt
        return await this.jwtProvider.sign(user.id);

    }

}