export const initialState = {
    open: false,
    title: "",
    severity: "success",
    variant: "filled",
    message: "the book added successfully",
    anchorOrigin: { vertical: "top", horizontal: "center" },
    action: null,
    autoHideDuration: 3000,
    icon: null,
};
export var REDUCER_ACTION_TYPES;
(function (REDUCER_ACTION_TYPES) {
    REDUCER_ACTION_TYPES["SHOW_SNACKBAR"] = "showSnackbar";
    REDUCER_ACTION_TYPES["HIDE_SNACKBAR"] = "hideSnackbar";
})(REDUCER_ACTION_TYPES || (REDUCER_ACTION_TYPES = {}));
export const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.SHOW_SNACKBAR:
            return {
                ...state,
                open: true,
                ...action.payload,
            };
        case REDUCER_ACTION_TYPES.HIDE_SNACKBAR:
            return { ...state, open: false };
        default:
            return state;
    }
};
