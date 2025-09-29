import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DocumentViewer from "@txtextcontrol/tx-react-ds-document-viewer";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
const ViewReport = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { sx: {
                    padding: "10px",
                    color: "white",
                    borderRadius: "15px",
                    backgroundColor: "#1A76D1",
                    transition: "0.3s ease all",
                    "&:hover": {
                        backgroundColor: "white",
                        border: "2px solid #1A76D1",
                        color: "#87BFF7",
                    },
                    "&:focus": {
                        outline: "none",
                    },
                }, onClick: handleOpenPopup, children: _jsx(InsertDriveFileOutlinedIcon, {}) }), _jsxs(Dialog, { open: isPopupOpen, onClose: handleClosePopup, maxWidth: "md", fullWidth: true, children: [_jsx(DialogContent, { children: _jsx(DocumentViewer, { width: "100%", height: "500px", serviceURL: "https://trial.dsserver.io", documentData: props.report, clientId: "dsserver.nrbk08V8243C4vBIysv3q6rfmDTH02Df", clientSecret: "AZ1GZvmvJg2xhJ3G7RJtAad5BT7TmI26" }) }), _jsx(DialogActions, { children: _jsx(Button, { onClick: handleClosePopup, sx: {
                                padding: "10px",
                                color: "white",
                                borderRadius: "15px",
                                backgroundColor: "#87BFF7",
                                "&:focus": {
                                    outline: "none",
                                },
                            }, children: "Close" }) })] })] }));
};
export default ViewReport;
