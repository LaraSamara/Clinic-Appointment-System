import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import AdminForm from "./component/admin-form";
import Header from "./component/form-header";
import withNavbar from "@clinic/component/with-navbar";
const UserManagement = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(AdminForm, {})] }));
};
const withRoutHOC = routeHOC({
    title: "UserManagement",
    pageAccessName: "user-management",
});
export default withNavbar(withRoutHOC(UserManagement));
