import { jsx as _jsx } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
const Header = () => {
    return (_jsx(Typography, { sx: {
            fontSize: "h4.fontSize",
            fontWeight: "bold",
            m: 1,
            mt: 6,
            mb: 3,
            color: "#87BFF7",
            textAlign: "center",
        }, children: "Admin Panel - Add User" }));
};
export default Header;
