import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import CreateRepositoryService from "../../../services/CreateRepositoryService";

interface CreateRepositoryRequest {

    username: string;
    repositoryName: string;

}

@injectable()
export default class CreateRepositoryController {

    static async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {

        try {


            const body: CreateRepositoryRequest = request.body;
            const token: string = response.locals.token;

            const createRepositoryService = container.resolve(CreateRepositoryService);

            const result = await createRepositoryService.execute( token, body );

            response.status(200).json(result);

        } catch (err) {
            next(err);
        }

    }

}