import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MuiSnackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import useSnackbar from "@clinic/hooks/useSnackbar";
const Snackbar = () => {
    const { state, hideSnackbar } = useSnackbar();
    const { open, title, message, severity, variant, anchorOrigin, action, autoHideDuration, icon, } = state;
    return (_jsx(MuiSnackbar, { open: open, autoHideDuration: autoHideDuration, onClose: hideSnackbar, anchorOrigin: anchorOrigin, TransitionComponent: Slide, children: _jsxs(Alert, { icon: icon, variant: variant, onClose: hideSnackbar, severity: severity, sx: { width: "100%" }, action: action, children: [title && _jsx(AlertTitle, { children: title }), message] }) }));
};
export default Snackbar;
