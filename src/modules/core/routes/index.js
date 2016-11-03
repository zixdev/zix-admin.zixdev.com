import AuthRoutes from "./auth";
import SystemRoutes from "./system";
import PagesRoutes from "./pages";
import UserRoutes from "./users";

export default [

    ...AuthRoutes,
    ...PagesRoutes,
    ...UserRoutes,
    ...SystemRoutes


];
