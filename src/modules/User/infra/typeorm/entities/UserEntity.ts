import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {BaseEntity} from "../../../../../shared/infra/typeorm/entities/BaseEntity";
import {IUserDTO} from "../../../dtos/IUserDTO";
import RepositoryEntity from "../../../../Repository/infra/typeorm/entities/RepositoryEntity";

@Entity('user')
export default class UserEntity extends BaseEntity implements IUserDTO {
    @PrimaryColumn({ name: 'id_user', unique: true })
    id: string;

    @Column({ name: 'avatar_url', nullable: true })
    avatar_url: string;

    @Column({ name: 'email', unique: true })
    email: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'username', unique: true })
    username: string;


    repositories: RepositoryEntity[]
}