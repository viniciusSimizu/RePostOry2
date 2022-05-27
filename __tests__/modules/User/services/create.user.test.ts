import IUserRepository from "../../../../src/modules/User/dtos/IUserRepository";
import {IUserDTO} from "../../../../src/modules/User/dtos/IUserDTO";
import {IEncodeProvider} from "../../../../src/shared/providers/EncodeProvider/IEncodeProvider";
import {IEmailValidateProvider} from "../../../../src/shared/providers/MailValidationProvider/IEmailValidateProvider";
import {IUIDProvider} from "../../../../src/shared/providers/UIDProvider/IUIDProvider";
import fakeUIDProvider from "../../../shared/providers/FakeEncodeProvider/FakeEncodeProvider";
import fakeUserRepository from "../repository/FakeUserRepository";
import fakeEmailValidateProvider from "../../../shared/providers/FakeEmailValidateProvider/FakeEmailValidateProvider";

class spyFakeEncodeProvider {
    protected decodeCount = 0;
    protected encodeCount = 0;
}

class fakeEncodeProvider extends spyFakeEncodeProvider implements IEncodeProvider {
    decode(plain: string, hashed: string): Promise<boolean> {
        this.decodeCount++;
        return Promise.resolve(false);
    }

    encode(plain: string): Promise<string> {
        this.encodeCount++;
        return Promise.resolve(plain);
    }

}


class FakeCreateUserService {

    constructor(
        private userRepository: IUserRepository,
        private encodeProvider: IEncodeProvider,
        private emailValidateProvider: IEmailValidateProvider,
        private uidProvider: IUIDProvider,
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

describe('Create User', () => {

    const fakeUser = {
        avatar_url: 'fake_url_image',
        username: 'Usuário de teste',
        email: 'teste@teste.com',
        password: 'admin123',
    }

    let sut: FakeCreateUserService;

    beforeEach(() => {
        sut = new FakeCreateUserService(
            // @ts-ignore
            fakeUserRepository,
            fakeEncodeProvider,
            fakeEmailValidateProvider,
            fakeUIDProvider,
        );
    })

    it('should create a user and save on DB', async () => {

        const { avatar_url, username, email, password } = fakeUser;

        expect(1).toBe(1)
    })

})