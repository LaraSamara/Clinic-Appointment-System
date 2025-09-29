import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart } from "@mui/x-charts/BarChart";
import { valueFormatter } from "./constant";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { chartSetting, legendItems, } from "./chart-setting";
import useAppointments from "@clinic/hooks/useAppointments";
export default function ClinicBarChart() {
    const { dataset } = useAppointments();
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: "h5", textAlign: "center", fontWeight: "bold", children: "Daily Appointment Status" }), _jsx(BarChart, { dataset: dataset, xAxis: [{ scaleType: "band", dataKey: "day" }], series: [
                    {
                        color: "#79B7F4",
                        dataKey: "pending",
                        valueFormatter,
                    },
                    {
                        color: "#CAE2FB",
                        dataKey: "completed",
                        valueFormatter,
                    },
                    {
                        color: "#3C9EDF",
                        dataKey: "confirmed",
                        valueFormatter,
                    },
                ], ...chartSetting, sx: {
                    padding: 0,
                    margin: 0,
                } }), _jsx(Stack, { sx: { display: { md: "flex", sm: "none" } }, direction: "row", spacing: 2, justifyContent: "center", children: legendItems.map((item) => (_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [_jsx(Box, { sx: {
                                width: 16,
                                height: 16,
                                bgcolor: item.color,
                                borderRadius: 1,
                            } }), _jsx(Typography, { variant: "body2", children: item.label })] }, item.label))) })] }));
}
