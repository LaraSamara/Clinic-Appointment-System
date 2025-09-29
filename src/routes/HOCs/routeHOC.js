import { jsx as _jsx } from "react/jsx-runtime";
import pageAccessRights from "../pageAccessRights";
import { Navigate } from "react-router-dom";
import { getLoggedInFromLocalStorage, } from "@clinic/utils/local-storage";
const routeHOC = (configs) => (Component) => {
    const { title, pageAccessName } = configs;
    document.title = title;
    const WrappedComponent = (props) => {
        const userRole = getLoggedInFromLocalStorage()?.role;
        if (!pageAccessName)
            return _jsx(Component, { ...props });
        const pageAccessRight = pageAccessRights.get(pageAccessName);
        if (!pageAccessRight)
            return _jsx(Component, { ...props });
        const hasAccess = pageAccessRight.roles.includes(userRole);
        if (!hasAccess)
            return _jsx(Navigate, { to: "/forbidden-component", replace: true });
        return _jsx(Component, { ...props });
    };
    return WrappedComponent;
};
export default routeHOC;
