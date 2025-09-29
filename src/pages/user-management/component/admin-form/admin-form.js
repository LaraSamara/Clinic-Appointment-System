import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import { VisuallyHiddenInput } from "./utils";
import { genderOptions, typeOptions } from "./constant";
import useUserManagement from "./hooks/useUserManagement";
import useFileUpload from "./hooks/useFileUpload";
import classes from "./style.module.css";
import { USER_ROLES } from "@clinic/constant";
const AdminForm = () => {
    const { formik } = useUserManagement();
    const { uploaded, base64Data, handleFileChange } = useFileUpload();
    useEffect(() => {
        if (base64Data) {
            formik.setFieldValue("report", base64Data);
        }
    }, [base64Data]);
    return (_jsx(FormikProvider, { value: formik, children: _jsxs(Form, { className: classes.formGrid, children: [_jsx(ClinicTextField, { label: "Name", name: "name" }), _jsx(ClinicTextField, { label: "Email", name: "email" }), _jsx(ClinicTextField, { type: "date", label: "Birthdate", name: "birthdate", slotProps: {
                        inputLabel: {
                            shrink: true,
                        },
                    } }), _jsx(ClinicTextField, { label: "Contact", name: "contact" }), _jsx(ClinicTextField, { type: "password", label: "Password", name: "password" }), _jsx(ClinicTextField, { type: "password", label: "Confirm Password", name: "confirmPassword" }), _jsxs(FormControl, { className: classes.formControl, sx: {
                        "& .MuiOutlinedInput-root": {
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#3498db",
                            },
                        },
                    }, children: [_jsx(InputLabel, { children: "Role" }), _jsx(Select, { ...formik.getFieldProps("role"), children: typeOptions.map((role) => (_jsx(MenuItem, { value: role, children: role }, role))) })] }), formik.values.role === USER_ROLES.DOCTOR && (_jsx(ClinicTextField, { label: "Specialty", name: "specialty" })), formik.values.role === USER_ROLES.PATIENT && (_jsxs(_Fragment, { children: [_jsxs(Button, { component: "label", startIcon: uploaded ? _jsx(CheckCircleIcon, {}) : _jsx(CloudUploadIcon, {}), sx: {
                                padding: "10px 10px ",
                                color: "white",
                                borderRadius: "15px",
                                backgroundColor: "#87BFF7",
                                border: "2px solid #ffffff",
                                transition: "0.3 ease all",
                                "&:hover": {
                                    backgroundColor: "white",
                                    border: "2px solid #87BFF7",
                                    color: "#87BFF7",
                                },
                            }, children: [uploaded ? "Uploaded!" : "Upload Report", " ", _jsx(VisuallyHiddenInput, { type: "file", onChange: handleFileChange, multiple: true })] }), _jsx(ClinicTextField, { label: "Illness Location", name: "illnessLocation" })] })), _jsx(FormControl, { component: "fieldset", sx: {
                        marginTop: formik.values.role === USER_ROLES.DOCTOR ? "-15px" : "0px",
                    }, children: _jsxs(FormGroup, { row: true, sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }, children: [_jsx(FormLabel, { component: "legend", sx: { marginRight: "10px" }, children: "Gender" }), genderOptions.map((gender) => (_jsx(FormControlLabel, { control: _jsx(Radio, { checked: formik.values.gender === gender, onChange: () => formik.setFieldValue("gender", gender) }), label: gender.charAt(0).toUpperCase() + gender.slice(1) }, gender)))] }) }), _jsx(Button, { type: "submit", className: classes.submitButton, sx: {
                        gridColumn: "span 2",
                        padding: "10px 0 ",
                        color: "white",
                        borderRadius: "15px",
                        backgroundColor: "#87BFF7",
                        border: "2px solid #ffffff",
                        transition: "0.3 ease all",
                        "&:hover": {
                            backgroundColor: "white",
                            border: "2px solid #87BFF7",
                            color: "#87BFF7",
                        },
                    }, children: "Save User" })] }) }));
};
export default AdminForm;
