import {IFakeUserCreateRepository} from "../repository/IFakeUserCreateRepository";
import {IFakeEncodeProvider} from "../../../shared/providers/FakeEncodeProvider/IFakeEncodeProvider";
import {
    IFakeEmailValidateProvider
} from "../../../shared/providers/FakeEmailValidateProvider/IFakeEmailValidateProvider";
import {IFakeUIDProvider} from "../../../shared/providers/FakeUIDProvider/IFakeUIDProvider";

type FakeCreateUserRequest = {
    username: string;
    email: string;
    password: string;
    avatar_url?: string | null | undefined | any;
}

export default class FakeCreateUserService {

    constructor(
        public readonly fakeCreateUserRepository: IFakeUserCreateRepository,
        public readonly fakeEncodeProvider: IFakeEncodeProvider,
        public readonly fakeEmailValidateProvider: IFakeEmailValidateProvider,
        public readonly fakeUIDProvider: IFakeUIDProvider,
    ) {}

    async execute(data: FakeCreateUserRequest): Promise<void> {

        const { username, email, password, avatar_url } = data;

        if (username.length === 0) {
            throw new Error ('Nome inválido');
        }

        if (!await this.fakeEmailValidateProvider.validate(email)) {
            throw new Error('Email inválido');
        }

        this.fakeCreateUserRepository.create({
            id: await this.fakeUIDProvider.uidGenerate(),
            username,
            email,
            password: await this.fakeEncodeProvider.encode(password),
            avatar_url: avatar_url ?? null,
        });

    }

}