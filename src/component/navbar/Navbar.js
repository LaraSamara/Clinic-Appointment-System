import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getLoggedInFromLocalStorage } from "@clinic/utils/local-storage";
export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (_jsx(Box, { sx: { flexGrow: 1 }, children: _jsx(AppBar, { position: "static", sx: { backgroundColor: "#1A76D1" }, children: _jsxs(Toolbar, { children: [_jsx(Tooltip, { title: "Home Page", children: _jsx(Avatar, { alt: "Clinic Logo", src: "/clinic-appointment-system2-high-resolution-logo.png", sx: { height: "50px", width: "50px", mr: 1, cursor: "pointer" }, variant: "circular", onClick: () => getLoggedInFromLocalStorage().role === "Doctor" &&
                                navigate("/clinic/doctor-dashboard") }) }), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "Clinic Appointment System" }), _jsx(Tooltip, { title: "Logout", onClick: handleLogout, children: _jsx(IconButton, { color: "inherit", "aria-label": "logout", children: _jsx(LogoutIcon, {}) }) })] }) }) }));
}
