import AuthRoutes from "./auth";
import SystemRoutes from "./system";
import PagesRoutes from "./pages";
import UsersRoutes from "./users";

export default [

    ...AuthRoutes,
    ...PagesRoutes,
    ...UsersRoutes,
    ...SystemRoutes


];
