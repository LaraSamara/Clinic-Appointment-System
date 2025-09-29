import { jsx as _jsx } from "react/jsx-runtime";
import MuiTextField from "@mui/material/TextField";
import { useField } from "formik";
const ClinicTextField = ({ name, ...rest }) => {
    const [field, meta] = useField(name);
    const configTextField = {
        ...field,
        ...rest,
        fullWidth: true,
    };
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }
    return (_jsx(MuiTextField, { ...configTextField, sx: {
            "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1A76D1",
                },
            },
        } }));
};
export default ClinicTextField;
