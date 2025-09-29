import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useBook from "./hooks/useBook";
import "flatpickr/dist/flatpickr.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./style.module.css";
import doctorImage from "@clinic/assets/DoctorImage.png";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import withNavbar from "@clinic/component/with-navbar";
const BookComponent = () => {
    const { formik, availableTimes, dateRef } = useBook();
    return (_jsxs(Box, { className: classes.container, children: [_jsx(Typography, { variant: "h4", className: classes.title, children: "We Are Always Ready to Help You!" }), _jsxs(Box, { className: classes.content, children: [_jsx(FormikProvider, { value: formik, children: _jsxs(Form, { className: classes.form, children: [_jsxs(Box, { className: classes.row, children: [_jsx(ClinicTextField, { inputRef: dateRef, type: "date", name: "date", placeholder: "dd-mm-yyyy", className: classes.input }), _jsxs(FormControl, { fullWidth: true, className: classes.input, error: formik.touched.time && Boolean(formik.errors.time), disabled: formik.values.date === "", children: [_jsxs(Select, { name: "time", value: formik.values.time, displayEmpty: true, onBlur: formik.handleBlur, onChange: formik.handleChange, children: [_jsx(MenuItem, { value: "", disabled: true, children: "--:-- --" }), availableTimes.map((time) => (_jsx(MenuItem, { value: time, children: time }, time)))] }), formik.touched.time && formik.errors.time && (_jsx(Typography, { variant: "body2", color: "error", className: classes.errorMessage, children: formik.errors.time }))] })] }), _jsx(Box, { className: classes.symptomsBox, children: _jsx(ClinicTextField, { type: "text", name: "symptoms", placeholder: "Describe the symptoms you are experiencing...", multiline: true, rows: 3, className: classes.input }) }), _jsx(Button, { type: "submit", variant: "contained", sx: {
                                        padding: "10px 40px ",
                                        color: "white",
                                        borderRadius: "5px",
                                        backgroundColor: "#1A76D1",
                                        border: "1px solid #ffffff",
                                        transition: "0.3 ease all",
                                        textTransform: "capitalize",
                                        "&:hover": {
                                            backgroundColor: "white",
                                            border: "2px solid #1A76D1",
                                            color: "#1A76D1",
                                        },
                                    }, fullWidth: true, children: "Book" })] }) }), _jsx(Box, { className: classes.imageContainer, children: _jsx("img", { src: doctorImage, alt: "Doctor and Nurse", className: classes.image }) })] })] }));
};
const withRouteHOC = routeHOC({
    title: "bookcomponent",
    pageAccessName: "add-booking",
});
export default withNavbar(withRouteHOC(BookComponent));
