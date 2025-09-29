import { jsx as _jsx } from "react/jsx-runtime";
import { getAppointmentsFromLocalStorage } from "@clinic/utils/local-storage";
import { createContext, useState, useLayoutEffect } from "react";
export const AppointmentsContext = createContext(undefined);
export const AppointmentsProvider = ({ children, }) => {
    const [dataset, setDataset] = useState([]);
    const [appointments, setAppointments] = useState([]);
    useLayoutEffect(() => {
        const appointment = appointments.length > 0
            ? appointments
            : getAppointmentsFromLocalStorage();
        aggregateAppointments(appointment);
        setAppointments(appointment);
    }, []);
    const aggregateAppointments = (appointments) => {
        const aggregatedData = Object.entries(appointments
            .map((appointment) => ({
            day: new Date(appointment.date).toLocaleDateString("en-US", {
                weekday: "long",
            }),
            confirmed: appointment.status === "Confirmed" ? 1 : 0,
            pending: appointment.status === "Pending" ? 1 : 0,
            completed: appointment.status === "Completed" ? 1 : 0,
        }))
            .reduce((acc, curr) => {
            if (!acc[curr.day]) {
                acc[curr.day] = { ...curr };
            }
            else {
                acc[curr.day].confirmed += curr.confirmed;
                acc[curr.day].pending += curr.pending;
                acc[curr.day].completed += curr.completed;
            }
            return acc;
        }, {})).map(([_, data]) => data);
        setDataset(aggregatedData);
    };
    const updateAppointments = (newAppointments) => {
        aggregateAppointments(newAppointments);
        setAppointments(newAppointments);
    };
    return (_jsx(AppointmentsContext.Provider, { value: { appointments, dataset, updateAppointments }, children: children }));
};
