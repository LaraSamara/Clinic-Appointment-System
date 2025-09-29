import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Charts from "@clinic/component/charts";
import Header from "@clinic/component/doctor-dashboad-header";
const DoctorDashboard = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Charts, {})] }));
};
const withRoutHOC = routeHOC({
    title: "doctor-dashboard",
    pageAccessName: "doctor-dashboard",
});
export default withRoutHOC(DoctorDashboard);
