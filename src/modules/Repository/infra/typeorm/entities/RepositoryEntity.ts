import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {IRepositoryDTO} from "../../../dtos/IRepositoryDTO";
import UserEntity from "../../../../User/infra/typeorm/entities/UserEntity";
import {JoinColumn} from "typeorm";

@Entity('repository')
export default class RepositoryEntity implements IRepositoryDTO {

    @PrimaryColumn({ name: 'id_repository', unique: true })
    id: number;

    @Column({ name: 'html_url', unique: true })
    html_url: string;

    @Column({ name: 'name', unique: true })
    name: string;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'updated_at' })
    updated_at: Date;


    @ManyToOne(() => UserEntity)
    @JoinColumn({
        referencedColumnName: 'id',
        name: 'id_user'
    })
    user: UserEntity;

}