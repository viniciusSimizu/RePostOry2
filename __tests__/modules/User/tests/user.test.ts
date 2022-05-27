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

let db: FakeUserDTO[];

const makeSut = (): FakeCreateUserService => {

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

    return userService;
}

describe('User Tests', () => {

    beforeEach(() => {
        db = []
    })


    // Should success
    it('should create a user on DB', async () => {

        const user: FakeCreateUserRequest = {
            username: 'Usuário de teste',
            email: 'teste@teste.com',
            password: 'admin123',
            avatar_url: ''
        }

        const sut = makeSut()

        await sut.execute(user);

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

    it('should not create a repeated user', () => {

        const user: FakeCreateUserRequest = {
            username: 'teste',
            email: 'teste@teste.com',
            password: 'admin123',
        }

        db.push({
            id: '',
            username: 'teste',
            email: '',
            password: '',
        })

        const sut = makeSut();

        const promise = sut.execute;

        expect(promise(user))
            .rejects
            .toThrowError()

    });

    it('should not create a user without email', () => {

        const user: FakeCreateUserRequest = {
            username: 'teste',
            email: '',
            password: 'admin123',
        }

        const sut = makeSut();

        const promise = sut.execute;

        expect(promise(user))
            .rejects
            .toThrowError()
    });

    it('should not create a user without username', () => {

        const user: FakeCreateUserRequest = {
            username: '',
            email: 'teste@teste.com',
            password: 'admin123',
        }

        const sut = makeSut();

        const promise = sut.execute;

        expect(promise(user))
            .rejects
            .toThrowError()
    });

})