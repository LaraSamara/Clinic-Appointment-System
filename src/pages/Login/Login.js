import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useLogin from "./hooks/useLogin";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { Stack } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { USER_ROLES } from "@clinic/constant";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Login = () => {
    const { formik, userRole } = useLogin();
    const navigate = useNavigate();
    return (_jsx(Box, { className: classes.container, children: userRole ? (_jsx(Navigate, { to: userRole === USER_ROLES.PATIENT
                ? "/clinic/add-booking"
                : userRole === USER_ROLES.ADMIN
                    ? "/clinic/user-management"
                    : "/clinic/doctor-dashboard", replace: true, state: { from: location.pathname } })) : (_jsxs(Box, { className: classes.loginBox, sx: {
                justifyContent: { sm: "center" },
                width: { sm: "70%", md: "20%" },
            }, children: [_jsx(Typography, { variant: "h5", className: classes.title, children: "Login" }), _jsx(FormikProvider, { value: formik, children: _jsx(Form, { children: _jsxs(Box, { className: classes.bottom, children: [_jsxs(Stack, { sx: { gap: 2, width: "100%" }, children: [_jsx(ClinicTextField, { type: "text", name: "email", placeholder: "user@example.com", className: classes.input }), _jsxs(Box, { children: [_jsx(ClinicTextField, { type: "password", name: "password", placeholder: "Password", className: classes.input }), _jsxs(Box, { className: "flexCenter", sx: {
                                                        justifyContent: "flex-start",
                                                        mt: 1,
                                                        color: "#1A76D1",
                                                        cursor: "pointer",
                                                    }, onClick: () => navigate("/"), children: [_jsx(ArrowBackIcon, {}), " Back"] })] })] }), _jsx(Button, { type: "submit", variant: "contained", sx: {
                                        padding: "10px 40px ",
                                        color: "white",
                                        borderRadius: "5px",
                                        backgroundColor: "#1A76D1",
                                        border: "2px solid #ffffff",
                                        transition: "0.3 ease all",
                                        textTransform: "capitalize",
                                        "&:hover": {
                                            backgroundColor: "white",
                                            border: "2px solid #1A76D1",
                                            color: "#1A76D1",
                                        },
                                    }, fullWidth: true, children: "Login" })] }) }) })] })) }));
};
const withRoutHOC = routeHOC({
    title: "logincomponent",
    pageAccessName: "login-component",
});
export default withRoutHOC(Login);
