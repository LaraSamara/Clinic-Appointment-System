import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Hero from "./component/hero/hero.js";

const About = () => {
    return (
        <>
        <Hero />
        </>
    )
}

const withRoutHOC = routeHOC({
    title: "About",
    pageAccessName: "about",
});

export default withRoutHOC(About);
