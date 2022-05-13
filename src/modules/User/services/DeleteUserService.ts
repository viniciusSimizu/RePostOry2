import {inject, injectable} from "tsyringe";
import IUserRepository from "../dtos/IUserRepository";
import {UpdateResult} from "typeorm";

@injectable()
export default class DeleteUserService {

    constructor(
        @inject('UserRepository') private repository: IUserRepository
    ) {}

    async execute(id: string): Promise<UpdateResult> {

        return await this.repository.delete(id);

    }

}