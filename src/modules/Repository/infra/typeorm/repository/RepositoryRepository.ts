import {injectable} from "tsyringe";
import {IRepositoryRepository} from "../../../dtos/IRepositoryRepository";
import {IRepositoryDTO} from "../../../dtos/IRepositoryDTO";
import {Repository} from "typeorm";
import RepositoryEntity from "../entities/RepositoryEntity";
import dataSource from "../../../../../shared/infra/typeorm";

@injectable()
export default class RepositoryRepository implements IRepositoryRepository {

    private readonly repository: Repository<RepositoryEntity>;

    constructor() {
        this.repository = dataSource.getRepository(RepositoryEntity);
    }

    async create(data: IRepositoryDTO): Promise<IRepositoryDTO> {

        const repository = await this.repository.create(data);
        await this.repository.save(repository);
        return repository;

    }

}