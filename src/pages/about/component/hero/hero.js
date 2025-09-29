import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./style.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    return (_jsx(Box, { className: classes.wrapper, children: _jsxs(Container, { className: classes.container, children: [_jsxs(Typography, { variant: "h1", sx: {
                        fontSize: "2.5rem",
                        textTransform: "capitalize",
                    }, children: ["your health, our priority", _jsx(Typography, { component: "span", variant: "inherit", sx: {
                                display: "block",
                                marginTop: "10px",
                            }, children: "smart & secure medical solutions" })] }), _jsx(Typography, { className: classes.p, children: "We provide innovative, smart, and secure medical solutions to ensure safety, efficiency, and peace of mind" }), _jsx(Box, { children: _jsx(Button, { sx: {
                            padding: "10px 40px ",
                            color: "white",
                            borderRadius: "6px",
                            backgroundColor: "#1A76D1",
                            border: "2px solid #ffffff",
                            transition: "0.3 ease all",
                            textTransform: "capitalize",
                            "&:hover": {
                                backgroundColor: "white",
                                border: "2px solid #1A76D1",
                                color: "#1A76D1",
                            },
                        }, onClick: () => navigate("login"), children: "Login" }) })] }) }));
};
export default Hero;
