import {Router} from "express";
import UserRoutes from "../../../../modules/User/infra/http/routes/user.routes";
import {handleErrors} from "../../middlewares/handleErrors";
import AuthRoutes from "../../../../modules/User/infra/http/routes/auth.routes";
import autheticateUser from "../../middlewares/autheticateUser";
import RepositoryRoutes from "../../../../modules/Repository/infra/http/routes/repository.routes";

const mainRouter = Router();

mainRouter.use(
    '/auth',
    AuthRoutes
);

mainRouter.use(
    '/user',
    [ autheticateUser ],
    UserRoutes
);

mainRouter.use(
    '/repository',
    [ autheticateUser ],
    RepositoryRoutes
);

mainRouter.use(handleErrors)

export default mainRouter;