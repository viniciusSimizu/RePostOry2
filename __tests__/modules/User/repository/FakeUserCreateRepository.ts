import {FakeUserDTO} from "../dto/FakeUserDTO";

export default class FakeUserCreateRepository {

    constructor(
        public db: FakeUserDTO[],
    ) {}

    async create(data: FakeUserDTO): Promise<FakeUserDTO> {
        this.db.push(data);
        return data;
    }

}