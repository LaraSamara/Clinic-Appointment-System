import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import { CardLabel } from "@clinic/types/header-card";
import { useNavigate } from "react-router-dom";
const HeaderCard = (props) => {
    const hoverImage = `${props.image.split(".")[0]}-Hover.svg`;
    const navigate = useNavigate();
    return (_jsxs(Box, { className: `${classes.cardBox} flexCenter`, children: [_jsxs(Box, { children: [_jsx("img", { src: props.image, alt: props.alt, className: classes.cardImage }), _jsx("img", { src: hoverImage, alt: props.alt, className: classes.cardImageHover })] }), _jsxs(Box, { className: `${classes.cardDetails} flexCenter`, sx: { cursor: props.label === CardLabel.Appointments ? "pointer" : "" }, onClick: () => navigate("/clinic/appointments-dashboard"), children: [_jsx(Box, { className: classes.cardNumber, children: props.count || 0 }), _jsx(Box, { className: classes.cardText, children: props.label })] })] }));
};
export default HeaderCard;
