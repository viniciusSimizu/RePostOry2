import {IBaseDTO} from "../../../shared/dtos/IBaseDTO";
import {IUserDTO} from "../../User/dtos/IUserDTO";

export interface IRepositoryDTO {

    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: Date;
    updated_at: Date;

    user: IUserDTO;

}