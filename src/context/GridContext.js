import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useReducer } from "react";
import { gridReducer, initialState, Reducer_Action_Type, } from "@clinic/reducers/gridReducer";
import { updateAppointmentInLocalStorage } from "@clinic/utils/local-storage";
import useAppointments from "@clinic/hooks/useAppointments";
export const GridContextValues = (initialState) => {
    const [state, dispatch] = useReducer(gridReducer, initialState);
    const { updateAppointments } = useAppointments();
    const init = useCallback((payload) => dispatch({ type: Reducer_Action_Type.INIT, payload }), []);
    const setFilter = useCallback((payload) => dispatch({ type: Reducer_Action_Type.SET_FILTERS, payload }), []);
    const updateRows = useCallback((payload) => {
        dispatch({ type: Reducer_Action_Type.UPDATE_ROWS, payload });
        updateAppointmentInLocalStorage(payload.rows);
        updateAppointments(payload.rows);
    }, []);
    return { init, state, setFilter, updateRows };
};
const initialContextValue = {
    state: initialState,
    init: () => { },
    setFilter: () => { },
    updateRows: () => { },
};
export const GridContext = createContext(initialContextValue);
export const GridProvider = ({ children }) => {
    const contextValues = GridContextValues(initialState);
    return (_jsx(GridContext.Provider, { value: contextValues, children: children }));
};
