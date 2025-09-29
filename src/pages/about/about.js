import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Hero from "./component/hero";
import ServicesSection from "./component/services-section";
import Footer from "./component/footer";
import ClinicMap from "./component/map-section";
const About = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(ServicesSection, {}), ",", _jsx(ClinicMap, {}), _jsx(Footer, {})] }));
};
const withRoutHOC = routeHOC({
    title: "About",
    pageAccessName: "about",
});
export default withRoutHOC(About);
