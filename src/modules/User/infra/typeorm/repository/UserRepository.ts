import UserEntity from "../entities/UserEntity";
import dataSource from "../../../../../shared/infra/typeorm";
import {injectable} from "tsyringe";
import IUserRepository from "../../../dtos/IUserRepository";
import {Repository, UpdateResult} from "typeorm";
import {IUserDTO} from "../../../dtos/IUserDTO";

@injectable()
export class UserRepository implements IUserRepository {

    private repository: Repository<UserEntity>

    constructor() {
        this.repository = dataSource.getRepository(UserEntity);
    }

    async create(data: IUserDTO): Promise<IUserDTO> {
        return await this.repository.save(await this.repository.create(data));
    }

    async findByEmail(email: string): Promise<IUserDTO> {
        const user = await this.repository.findOne({
            where: {
                email
            }
        })

        return user
    }

    async findById(id: string): Promise<IUserDTO> {
        return await this.repository.findOne({
            where: {
                id
            }
        })
    }

    async delete(id: string): Promise<void> {
        await this.repository.softDelete(id);
    }

}