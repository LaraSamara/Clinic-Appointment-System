export var CardLabel;
(function (CardLabel) {
    CardLabel["Pending"] = "Pending";
    CardLabel["Confirmed"] = "Confirmed";
    CardLabel["Appointments"] = "Appointments";
})(CardLabel || (CardLabel = {}));
export const cardDetails = {
    [CardLabel.Pending]: { image: "/public/Blue-Clock.svg", alt: "clock" },
    [CardLabel.Confirmed]: { image: "/public/Blue-Check.svg", alt: "check" },
    [CardLabel.Appointments]: { image: "/public/Blue-Calendar.svg", alt: "calendar" },
};
