import {NextFunction, Request, Response} from "express";
import {container} from "tsyringe";
import DeleteUserService from "../../../services/DeleteUserService";

export default class DeleteUserController {

    static async handle(request: Request, response: Response, next: NextFunction) {

        try {

            const service = container.resolve(DeleteUserService);
            const token = response.locals.token

            const result = await service.execute(token);
            if (result.affected != 1) {
                response.status(400).json({
                    error: "User doesn't exist"
                })
            }

            response.status(200).send('User deleted')

        } catch (err) {
            next(err);
        }
    }

}