import {Router} from "express";
import {CreateUserController} from "../controllers/CreateUserController";
import LoginUserController from "../controllers/LoginUserController";
import {celebrate, Segments} from "celebrate";
import {createUserSchema} from "../../../schemas/createUser.schema";
import {loginUserSchema} from "../../../schemas/loginUserSchema";
import userRoutes from "./user.routes";

const loginUserController = new LoginUserController();

const authRoutes = Router();

authRoutes.post(
    '/register',
    [ celebrate({ [Segments.BODY]: createUserSchema }, { abortEarly: false }) ],
    CreateUserController.handle
)

authRoutes.post(
    '/login',
    [ celebrate({ [Segments.BODY]: loginUserSchema }, { abortEarly: false }) ],
    loginUserController.handle
)

export default authRoutes;