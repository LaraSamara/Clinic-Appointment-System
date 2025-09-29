import { jsx as _jsx } from "react/jsx-runtime";
import { getTokenFromLocalStorage } from "@clinic/utils/local-storage";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const GuardedRoute = () => {
    const location = useLocation();
    const token = getTokenFromLocalStorage();
    if (!token)
        return (_jsx(Navigate, { to: "/unauthenticated", replace: true, state: { from: location.pathname } }));
    return _jsx(Outlet, {});
};
export default GuardedRoute;
