import { jsx as _jsx } from "react/jsx-runtime";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import ErrorComponent from "@clinic/component/error-component";
const Unauthenticated = () => {
    return (_jsx(ErrorComponent, { imgPath: "Unauthenticated.gif", altText: "Unauthenticated Error" }));
};
const withRoutHOC = routeHOC({
    title: "Unauthenticated",
    pageAccessName: "unauthenticated",
});
export default withRoutHOC(Unauthenticated);
