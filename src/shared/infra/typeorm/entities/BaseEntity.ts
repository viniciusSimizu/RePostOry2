import {IBaseDTO} from "../../../dtos/IBaseDTO";
import {CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

export abstract class BaseEntity implements IBaseDTO {
}