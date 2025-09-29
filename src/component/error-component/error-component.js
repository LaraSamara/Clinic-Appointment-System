import { jsx as _jsx } from "react/jsx-runtime";
import classes from "./style.module.css";
import Box from "@mui/material/Box";
const ErrorComponent = (props) => {
    return (_jsx(Box, { className: classes.errorComponent, children: _jsx("img", { src: props.imgPath, alt: props.altText, className: classes.errorImage }) }));
};
export default ErrorComponent;
