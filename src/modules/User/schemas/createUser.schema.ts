import {Joi} from "celebrate";

export const createUserSchema = Joi.object({
    username: Joi.string().required(),
    avatar_url: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})