import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from "react";
import GuardedRoute from "./guardedRoute";
const Appointments = lazy(() => import("@clinic/pages/appointments"));
const DoctorDashboard = lazy(() => import("@clinic/pages/doctor-dashboard"));
const UserManagement = lazy(() => import("@clinic/pages/user-management"));
const Booking = lazy(() => import("@clinic/pages/booking"));
const privateRoutes = {
    path: "/clinic",
    element: _jsx(GuardedRoute, {}),
    children: [
        {
            path: "add-booking",
            element: _jsx(Booking, {}),
        },
        {
            path: "appointments-dashboard",
            element: _jsx(Appointments, {}),
        },
        {
            path: "doctor-dashboard",
            element: _jsx(DoctorDashboard, {}),
        },
        {
            path: "user-management",
            element: _jsx(UserManagement, {}),
        },
    ],
};
export default privateRoutes;
