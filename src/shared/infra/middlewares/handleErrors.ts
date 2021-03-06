import {NextFunction, Request, Response} from "express";

export function handleErrors(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
): Response {

    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    next(err);

}