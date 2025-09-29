import { cardDetails } from "@clinic/types/header-card";
export const createHeaderCard = (count, label) => ({
    count,
    label,
    image: cardDetails[label].image,
    alt: cardDetails[label].alt,
});
