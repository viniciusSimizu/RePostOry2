import {container} from "tsyringe";
import IUserRepository from "../../modules/User/dtos/IUserRepository";
import {UserRepository} from "../../modules/User/infra/typeorm/repository/UserRepository";
import {IEncodeProvider} from "../providers/EncodeProvider/IEncodeProvider";
import {BCryptEncodeProvider} from "../providers/EncodeProvider/implementation/BCryptEncodeProvider";
import {IEmailValidateProvider} from "../providers/MailValidationProvider/IEmailValidateProvider";
import {EmailValidateProvider} from "../providers/MailValidationProvider/implementation/EmailValidateProvider";
import {IUIDProvider} from "../providers/UIDProvider/IUIDProvider";
import {UUIDProvider} from "../providers/UIDProvider/implementation/UUIDProvider";
import {IJWTProvider} from "../providers/JWTProvider/IJWTProvider";
import JsonWebTokenProvider from "../providers/JWTProvider/implements/JsonWebTokenProvider";
import {IRepositoryRepository} from "../../modules/Repository/dtos/IRepositoryRepository";
import RepositoryRepository from "../../modules/Repository/infra/typeorm/repository/RepositoryRepository";

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository
);

container.registerSingleton<IRepositoryRepository>(
    'RepositoryRepository',
    RepositoryRepository
);

container.registerSingleton<IEncodeProvider>(
    'EncodeProvider',
    BCryptEncodeProvider
);

container.registerSingleton<IEmailValidateProvider>(
    'EmailValidateProvider',
    EmailValidateProvider
)

container.registerSingleton<IUIDProvider>(
    'UIDProvider',
    UUIDProvider
);

container.registerSingleton<IJWTProvider>(
    'JWTProvider',
    JsonWebTokenProvider
);
