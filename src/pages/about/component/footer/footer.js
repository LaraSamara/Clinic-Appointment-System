import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const Footer = () => {
    return (_jsx(_Fragment, { children: _jsx(Box, { sx: {
                backgroundColor: "#176ABC",
                color: "white",
                padding: 4,
                position: "relative",
                bottom: 0,
                width: "100%",
            }, children: _jsxs(Container, { sx: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 4, sm: 4 },
                    justifyContent: "space-between",
                }, children: [_jsxs(Box, { sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            width: { xs: "100%", sm: "45%", md: "30%" },
                        }, children: [_jsx(Typography, { variant: "h6", children: "About Us" }), _jsx(Typography, { variant: "body2", children: "Your health is our priority. We provide easy access to professional medical care, allowing you to book appointments with trusted doctors and receive quality treatment at your convenience." })] }), _jsxs(Box, { sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            width: { xs: "100%", sm: "45%", md: "30%" },
                        }, children: [_jsx(Typography, { variant: "h6", children: "Clinic Hours" }), _jsx(Typography, { variant: "body2", children: "Monday - Friday: 9:00 AM - 5:00 PM" }), _jsx(Typography, { variant: "body2", children: "Saturday: 10:00 AM - 2:00 PM" })] }), _jsxs(Box, { sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            width: { xs: "100%", sm: "45%", md: "30%" },
                        }, children: [_jsx(Typography, { variant: "h6", children: "Patient Care" }), _jsx(Typography, { variant: "body2", children: "We are committed to providing a seamless healthcare experience. Book appointments, receive timely medical attention, and stay informed about your health." })] }), _jsx(Box, { component: "footer", sx: {
                            backgroundColor: "#1A76D1",
                            color: "white",
                            textAlign: "center",
                            padding: 2,
                            width: "100%"
                        }, children: _jsx(Typography, { variant: "body2", children: "\u00A9 2025 All Rights Reserved UseEffect team" }) })] }) }) }));
};
export default Footer;
