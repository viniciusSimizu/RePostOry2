import {Joi} from "celebrate";

interface createRepositoryBody {

    username: any;
    repositoryName: any;

}

export const createRepositorySchema = Joi.object({

    username: Joi.string().required(),
    repositoryName: Joi.string().required()

} as createRepositoryBody)