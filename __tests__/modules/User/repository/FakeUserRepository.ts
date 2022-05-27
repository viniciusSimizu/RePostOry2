import IUserRepository from "../../../../src/modules/User/dtos/IUserRepository";
import {IUserDTO} from "../../../../src/modules/User/dtos/IUserDTO";

type CreateUserRequest = {
    avatar_url: string;
    username: string;
    email: string;
    password: string;
}

class spyFakeUserRepository {
    protected createCount = 0;
    protected deleteCount = 0;
    protected findByEmailCount = 0;
    protected findByIdCount = 0;
}

export default class fakeUserRepository extends spyFakeUserRepository implements IUserRepository {

    private fakeDB: IUserDTO[];

    constructor() {
        super();
        this.fakeDB = [];
    }

    async create(data: IUserDTO): Promise<IUserDTO> {
        this.createCount++;
        this.fakeDB.push(data);
        return;
    }

    async delete(id: string): Promise<void> {
        this.deleteCount++;
        this.fakeDB[id] = 'deleted';
    }

    async findByEmail(email: string): Promise<IUserDTO> {
        this.findByEmailCount++;
        return;
    }

    async findById(id: string): Promise<IUserDTO> {
        this.findByIdCount++;
        return this.fakeDB[id];
    }
}