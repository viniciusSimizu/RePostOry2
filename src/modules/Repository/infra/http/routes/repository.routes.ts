import {Router} from "express";
import CreateRepositoryController from "../controller/CreateRepositoryController";
import {celebrate, Segments} from "celebrate";
import {createRepositorySchema} from "../../../schemas/createRepository.schema";

const repositoryRoutes = Router();

repositoryRoutes.post(
    '/get',
    [ celebrate( { [ Segments.BODY ]: createRepositorySchema }, { abortEarly: false } ) ],
    CreateRepositoryController.handle
);

export default repositoryRoutes;