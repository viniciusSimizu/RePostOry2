import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import CreateUserService from "../../../services/CreateUserService";

@injectable()
export class CreateUserController {

    static async handle(
        request: Request,
        response: Response,
        next: NextFunction) {

        try {

            const body = request.body;

            const service = container.resolve(CreateUserService);

            const user = await service.execute(body);

            if(!user) {
                response.status(400).json({
                    error: 'Invalid data'
                })
            }

            response.status(201).json(user);

        } catch (err) {
            next(err);
        }
    }

}