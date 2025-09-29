import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Grid from "@clinic/component/grid";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import useGrid from "@clinic/hooks/useGrid";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Filtering from "@clinic/component/filtering";
import withNavbar from "@clinic/component/with-navbar/with-navbar";
import useGridConfiguration from "./hooks/useGridConfiguration";
import Loader from "@clinic/component/Loader";
const Appointments = () => {
    const { init } = useGrid();
    const { rows, columns } = useGridConfiguration();
    useEffect(() => {
        init({ rows, columns });
    }, []);
    if (!rows.length)
        return _jsx(Loader, {});
    return (_jsx(Box, { className: classes.wrapper, children: _jsxs(Container, { className: classes.container, children: [_jsx(Filtering, {}), _jsx(Grid, {})] }) }));
};
const withRoutHOC = routeHOC({
    title: "AppointmentsDashboard",
    pageAccessName: "appointments-dashboard",
});
export default withNavbar(withRoutHOC(Appointments));
