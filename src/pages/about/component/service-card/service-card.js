import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ServiceCard = (props) => {
    return (_jsxs(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: { xs: "100%", sm: "45%", md: "28%" },
        }, children: [_jsxs(Box, { sx: {
                    width: 75,
                    height: 75,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    transition: "0.3s",
                    border: "2px solid #1A76D1",
                    padding: "4px",
                    "&:hover": {
                        backgroundColor: "#1A76D1",
                    },
                    "&:hover svg": {
                        color: "white",
                    },
                    svg: {
                        color: "#1A76D1",
                    },
                }, children: [props.icon, " "] }), _jsx(Typography, { variant: "h6", fontWeight: "bold", mt: 1, children: props.title }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: props.description })] }));
};
export default ServiceCard;
