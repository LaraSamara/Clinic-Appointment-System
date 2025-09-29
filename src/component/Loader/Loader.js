"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
const Loader = ({ size = 60, color = "primary", loading = true, }) => {
    if (!loading)
        return null;
    return (_jsx(Box, { className: classes.loaderContainer, children: _jsx(CircularProgress, { size: size, color: color }) }));
};
export default Loader;
