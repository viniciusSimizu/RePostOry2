import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import LoginUserService from "../../../services/LoginUserService";

@injectable()
export default class LoginUserController {

    async handle(request: Request, response: Response, next: NextFunction) {

        try {

            const body = request.body;

            const service = container.resolve(LoginUserService);

            const token = await service.execute(body);

            response.status(200).json({token});

        } catch (err) {
            next(err);
        }

    }

}