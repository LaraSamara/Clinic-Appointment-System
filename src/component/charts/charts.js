import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ClinicPieChart from "../pie-chart";
import ClinicBarChart from "../bar-chart";
import Box from "@mui/material/Box";
const Charts = () => {
    return (_jsxs(Box, { className: "flexCenter", sx: {
            mt: "2rem",
            flexWrap: "wrap",
            justifyContent: "space-around",
        }, children: [_jsx(ClinicBarChart, {}), _jsx(ClinicPieChart, {})] }));
};
export default Charts;
