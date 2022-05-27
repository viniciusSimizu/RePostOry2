import {IUserDTO} from "./IUserDTO";
import {UpdateResult} from "typeorm";

export default interface IUserRepository {
    create(data: IUserDTO): Promise<IUserDTO>;
    findByEmail(email: string): Promise<IUserDTO>;
    findById(id: string): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
}