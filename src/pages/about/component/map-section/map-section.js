import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Box from "@mui/material/Box";
const clinicPosition = [40.73061, -73.935242];
const clinicIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
const ClinicMap = () => {
    return (_jsx(Box, { sx: { height: "400px", width: "100%" }, children: _jsxs(MapContainer, { center: clinicPosition, zoom: 15, style: { height: "100%", width: "100%" }, children: [_jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), _jsx(Marker, { position: clinicPosition, icon: clinicIcon, children: _jsxs(Popup, { children: ["\uD83C\uDFE5 ", _jsx("b", { children: "Doctor Clinic" }), " ", _jsx("br", {}), " 123 Main Street, New York, NY ", _jsx("br", {})] }) })] }) }));
};
export default ClinicMap;
