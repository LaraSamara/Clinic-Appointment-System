import { jsx as _jsx } from "react/jsx-runtime";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import ErrorComponent from "@clinic/component/error-component";
const pageNotFound = () => {
    return (_jsx(ErrorComponent, { imgPath: "/public/404-Error.gif", altText: "Page Not Found" }));
};
const withRouteHOC = routeHOC({
    title: "PageNotFound",
    pageAccessName: "page-not-found",
});
export default withRouteHOC(pageNotFound);
