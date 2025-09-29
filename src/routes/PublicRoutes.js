import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from "react";
const ForbiddenComponent = lazy(() => import("@clinic/pages/forbidden"));
const Unauthenticated = lazy(() => import("@clinic/pages/unauthenticated"));
const Login = lazy(() => import("@clinic/pages/Login"));
const PageNotFound = lazy(() => import("@clinic/pages/pageNotFound"));
const About = lazy(() => import("@clinic/pages/about/about"));
const publicRoutes = {
    path: "",
    children: [
        {
            index: true,
            element: _jsx(About, {}),
        },
        {
            path: "login",
            element: _jsx(Login, {}),
        },
        {
            path: "unauthenticated",
            element: _jsx(Unauthenticated, {}),
        },
        {
            path: "forbidden-component",
            element: _jsx(ForbiddenComponent, {}),
        },
        {
            path: "*",
            element: _jsx(PageNotFound, {}),
        },
    ],
};
export default publicRoutes;
