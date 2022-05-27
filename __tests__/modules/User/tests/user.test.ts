import FakeCreateUserService from "../services/FakeCreateUserService";
import FakeUserCreateRepository from "../repository/FakeUserCreateRepository";
import {FakeUserDTO} from "../dto/FakeUserDTO";
import FakeEncodeProvider from "../../../shared/providers/FakeEncodeProvider/FakeEncodeProvider";
import FakeEmailValidateProvider from "../../../shared/providers/FakeEmailValidateProvider/FakeEmailValidateProvider";
import FakeUIDProvider from "../../../shared/providers/FakeUIDProvider/FakeUIDProvider";

type FakeCreateUserRequest = {
    username: string;
    email: string;
    password: string;
    avatar_url?: string | null | undefined | any;
}

let db: FakeUserDTO[] = [];

const makeSut = async (userData: FakeCreateUserRequest): Promise<FakeCreateUserService> => {
    const user: FakeCreateUserRequest = userData;

    const fakeUserCreateRepository = new FakeUserCreateRepository(db);
    const fakeEncodeProvider = new FakeEncodeProvider();
    const fakeEmailValidateProvider = new FakeEmailValidateProvider();
    const fakeUIDProvider = new FakeUIDProvider();

    const userService = new FakeCreateUserService(
        fakeUserCreateRepository,
        fakeEncodeProvider,
        fakeEmailValidateProvider,
        fakeUIDProvider,
    );

    await userService.execute(user);

    return userService;
}

describe('User Tests', () => {

    // Should success
    it('should create a user on DB', async () => {

        const user: FakeCreateUserRequest = {
            username: 'Usuário de teste',
            email: 'teste@teste.com',
            password: 'admin123',
            avatar_url: ''
        }

        const sut = await makeSut(user)

        expect(sut.fakeEmailValidateProvider.validateCount)
            .toBe(1)

        expect(sut.fakeUIDProvider.uidGenerateCount)
            .toBe(1)

        expect(sut.fakeEncodeProvider.encodeCount)
            .toBe(1)

        expect(db.length)
            .toBe(1)

        expect(db[0].username)
            .toBe(user.username)

    })



    afterEach(() => {
        db = []
    })

})