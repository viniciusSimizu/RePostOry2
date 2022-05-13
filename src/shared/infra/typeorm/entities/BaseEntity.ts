import {IBaseDTO} from "../../../dtos/IBaseDTO";
import {CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

export abstract class BaseEntity implements IBaseDTO {
    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deleted_at: Date
}