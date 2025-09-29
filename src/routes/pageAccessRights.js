const pageAccessRights = new Map([
    [
        "doctor-dashboard",
        {
            roles: ["Doctor"],
        },
    ],
    [
        "appointments-dashboard",
        {
            roles: ["Doctor"],
        },
    ],
    [
        "add-booking",
        {
            roles: ["Patient"],
        },
    ],
    [
        "user-management",
        {
            roles: ["Admin"],
        },
    ],
]);
export default pageAccessRights;
