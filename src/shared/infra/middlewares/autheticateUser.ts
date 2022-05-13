import {NextFunction, Request, Response} from "express";
import {container} from "tsyringe";
import JsonWebTokenProvider from "../../providers/JWTProvider/implements/JsonWebTokenProvider";

export default async function autheticateUser(
    request: Request,
    response: Response,
    next: NextFunction
) {

    try {

        const authToken = request.headers.authorization;

        const [, token] = authToken.split(' ');

        if(!token) {
            response.status(400).json({ error: 'Token required' })
        }

        const jwtProvider = container.resolve(JsonWebTokenProvider);
        response.locals.token = (await jwtProvider.verify(token)).sub;

        next();

    } catch (err) {
        next(err ?? 'Token inválid');
    }

}