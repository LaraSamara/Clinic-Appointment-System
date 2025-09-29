import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { services } from "./services";
import ServiceCard from "../service-card";
const ServicesSection = () => {
    return (_jsx(Box, { sx: { padding: "2.5rem 0", backgroundColor: "#f5f5f5", marginBottom: -3 }, children: _jsx(Container, { sx: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, }, children: services.map((service, index) => (_jsx(ServiceCard, { ...service }, index))) }) }));
};
export default ServicesSection;
