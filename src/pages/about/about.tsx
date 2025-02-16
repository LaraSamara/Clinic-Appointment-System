import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Hero from "./component/hero";
import ServicesSection from "./component/services-section";

const About = () => {
    return (
        <>
        <Hero />
        <ServicesSection/>,
        </>
    )
}

const withRoutHOC = routeHOC({
    title: "About",
    pageAccessName: "about",
});

export default withRoutHOC(About);
