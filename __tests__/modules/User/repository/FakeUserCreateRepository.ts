import {FakeUserDTO} from "../dto/FakeUserDTO";

export default class FakeUserCreateRepository {

    constructor(
        public db: FakeUserDTO[],
    ) {}

    async create(data: FakeUserDTO): Promise<FakeUserDTO> {

        for (const user of this.db) {
            if (user.username === data.username) {
                throw new Error('Usuário já cadastrado')
            }
        }

        this.db.push(data);
        return data;
    }

}