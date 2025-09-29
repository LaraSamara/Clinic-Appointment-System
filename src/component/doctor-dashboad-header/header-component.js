import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import HeaderCard from "../card-header";
import useHeaderCard from "./hooks/useHeaderCard";
const Header = () => {
    const { cards } = useHeaderCard();
    return (_jsx(Box, { className: classes.headerContainer, children: _jsx(Box, { className: classes.headerContent, children: cards.map((card, index) => (_jsx(HeaderCard, { count: card.count, image: card.image, label: card.label, alt: card.alt }, index))) }) }));
};
export default Header;
