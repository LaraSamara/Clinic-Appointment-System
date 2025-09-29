export const initialState = {
    columns: [],
    rows: [],
    filters: {
        name: "",
        status: "All",
    },
};
export var Reducer_Action_Type;
(function (Reducer_Action_Type) {
    Reducer_Action_Type["INIT"] = "Init";
    Reducer_Action_Type["SET_FILTERS"] = "SetFilters";
    Reducer_Action_Type["UPDATE_ROWS"] = "UpdateRows";
})(Reducer_Action_Type || (Reducer_Action_Type = {}));
export const gridReducer = (state, action) => {
    switch (action.type) {
        case Reducer_Action_Type.INIT:
            return { ...state, ...action.payload };
        case Reducer_Action_Type.SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...action.payload.filters } };
        case Reducer_Action_Type.UPDATE_ROWS:
            return { ...state, rows: action.payload.rows || [] };
        default:
            return state;
    }
};
