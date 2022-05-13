import {inject, injectable} from "tsyringe";
import {IRepositoryDTO} from "../dtos/IRepositoryDTO";
import IUserRepository from "../../User/dtos/IUserRepository";
import {IRepositoryRepository} from "../dtos/IRepositoryRepository";
import {Octokit} from "octokit";
import gitConfig from "../../../config/cfg_git";

interface ICreateRepositoryRequest {
    username: string;
    repositoryName: string;
}

const cfg_git = gitConfig();

@injectable()
export default class CreateRepositoryService {

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('RepositoryRepository')
        private repositoryRepository: IRepositoryRepository
    ) {}

    async execute( id_user: string, data: ICreateRepositoryRequest): Promise<IRepositoryDTO> {

        const octokit = new Octokit({
            auth: cfg_git.GIT_AUTH_TOKEN
        })

        const repo: any = await octokit.request(`GET /repos/${data.username}/${data.repositoryName}`, {
            owner: data.username,
            repo: data.repositoryName
        })

        const user = await this.userRepository.findById(id_user);

        const { id, name, html_url, description, created_at, updated_at } = repo.data;

        const repository = await this.repositoryRepository.create({
            id,
            name,
            html_url,
            description,
            created_at,
            updated_at,
            user
        });

        await this.repositoryRepository.create(repository);

        return repository;

    }

}