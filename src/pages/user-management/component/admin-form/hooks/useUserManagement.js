import useSnackbar from "@clinic/hooks/useSnackbar";
import { useFormik } from "formik";
import { INITIAL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { getUsersFromLocalStorage, setUsersInLocalStorage } from "@clinic/utils/local-storage";
const useUserManagement = () => {
    const { showSnackbar } = useSnackbar();
    const add = (values) => {
        const users = getUsersFromLocalStorage();
        setUsersInLocalStorage([...users, values]);
        showSnackbar({ message: "The user added successfully😁" });
    };
    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: (values, { resetForm }) => {
            add(values);
            resetForm();
        },
        validationSchema: validationSchema,
        validateOnMount: true,
    });
    return { formik };
};
export default useUserManagement;
