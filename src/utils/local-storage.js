export const getItemFromLocalStorage = (key, defaultValue) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};
export const setItemInLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
    }
};
export const getUsersFromLocalStorage = () => {
    return getItemFromLocalStorage("users", []);
};
export const setUsersInLocalStorage = (users) => {
    setItemInLocalStorage("users", users);
};
export const setLoggedInUserInLocalStorage = (user) => {
    setItemInLocalStorage("user", user);
};
export const getLoggedInFromLocalStorage = () => {
    return getItemFromLocalStorage("user", undefined);
};
export const setTokenInLocalStorage = (token) => {
    setItemInLocalStorage("token", token);
};
export const getTokenFromLocalStorage = () => {
    return getItemFromLocalStorage("token", undefined);
};
export const setAppointmentInLocalStorage = (appointment) => {
    const appointments = getAppointmentsFromLocalStorage();
    appointments.push(appointment);
    setItemInLocalStorage("appointments", appointments);
};
export const updateAppointmentInLocalStorage = (appointments) => {
    setItemInLocalStorage("appointments", appointments);
};
export const getAppointmentsFromLocalStorage = () => {
    return getItemFromLocalStorage("appointments", []);
};
