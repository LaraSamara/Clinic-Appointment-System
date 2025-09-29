import { jsx as _jsx } from "react/jsx-runtime";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Vaccines from "@mui/icons-material/Vaccines";
import Emergency from "@mui/icons-material/Emergency";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
export const services = [
    {
        icon: _jsx(LocalHospitalIcon, { fontSize: "large" }),
        title: "Emergency Help",
        description: "Get immediate assistance for any medical emergency.",
    },
    {
        icon: _jsx(Vaccines, { fontSize: "large" }),
        title: "Medical Treatment",
        description: "Receive top-tier medical treatment from professionals.",
    },
    {
        icon: _jsx(Emergency, { fontSize: "large" }),
        title: "Enriched Pharmacy",
        description: "Access high-quality medicines and pharmaceutical support.",
    },
    {
        icon: _jsx(HealthAndSafetyIcon, { fontSize: "large" }),
        title: "Health Monitoring",
        description: "Monitor your health with our advanced tracking systems.",
    },
    {
        icon: _jsx(SchoolIcon, { fontSize: "large" }),
        title: "Health Education",
        description: "Learn about various health topics with expert guidance.",
    },
    {
        icon: _jsx(GroupIcon, { fontSize: "large" }),
        title: "Community Support",
        description: "Join our community and support others in their health journey.",
    },
];
