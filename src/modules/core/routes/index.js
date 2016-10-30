import AuthRoutes from "./auth";
import SystemRoutes from "./system";
import PagesRoutes from "./pages";

export default [

    ...AuthRoutes,
    ...PagesRoutes,
    ...SystemRoutes


];
