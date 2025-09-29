import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";
import Loader from "@clinic/component/Loader";
const AppRoutes = () => {
    const appRoutes = useRoutes([publicRoutes, privateRoutes]);
    return _jsxs(Suspense, { fallback: _jsx(Loader, {}), children: [" ", appRoutes] });
};
export default AppRoutes;
