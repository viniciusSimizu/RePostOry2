import {Request, Response, Router} from "express";
import {CreateUserController} from "../controllers/CreateUserController";
import {celebrate, Segments} from "celebrate";
import {createUserSchema} from "../../../schemas/createUser.schema";
import {loginUserSchema} from "../../../schemas/loginUserSchema";
import LoginUserController from "../controllers/LoginUserController";

const userRoutes = Router();

userRoutes.delete(
    '',
    (req: Request, res: Response): void => { res.status(200).json(res.locals.token) }
)

export default userRoutes;