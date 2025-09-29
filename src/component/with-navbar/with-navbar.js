import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../navbar";
const withNavbar = (Component) => {
    return (props) => (_jsxs("main", { children: [_jsx(Navbar, {}), _jsx(Component, { ...props })] }));
};
export default withNavbar;
