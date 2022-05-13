import {IRepositoryDTO} from "./IRepositoryDTO";

export interface IRepositoryRepository {

    create(data: IRepositoryDTO): Promise<IRepositoryDTO>;

}