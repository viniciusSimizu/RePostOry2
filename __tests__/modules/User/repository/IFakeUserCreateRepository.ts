import {FakeUserDTO} from "../dto/FakeUserDTO";

export interface IFakeUserCreateRepository {
    db: FakeUserDTO[];
    create(data: FakeUserDTO): Promise<FakeUserDTO>;
}