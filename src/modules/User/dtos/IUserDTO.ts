import {IBaseDTO} from "../../../shared/dtos/IBaseDTO";
import {IRepositoryDTO} from "../../Repository/dtos/IRepositoryDTO";

export interface IUserDTO extends IBaseDTO {
    id?: string | number | any;
    avatar_url: string;
    username: string;
    email: string;
    password: string;

    repositories: IRepositoryDTO[];
}