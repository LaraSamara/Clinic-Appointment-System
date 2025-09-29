import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { initialState } from "../reducers/snackbarReducer";
import { useCallback, useReducer } from "react";
import { reducer, REDUCER_ACTION_TYPES, } from "../reducers/snackbarReducer";
const SnackBarContext = (initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const showSnackbar = useCallback((payload) => dispatch({ type: REDUCER_ACTION_TYPES.SHOW_SNACKBAR, payload }), []);
    const hideSnackbar = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPES.HIDE_SNACKBAR }), []);
    return { state, showSnackbar, hideSnackbar };
};
const initContextValues = {
    state: initialState,
    hideSnackbar: () => { },
    showSnackbar: () => { },
};
export const SnackbarContext = createContext(initContextValues);
const SnackbarProvider = ({ children, }) => {
    const contextValues = SnackBarContext(initialState);
    return (_jsx(SnackbarContext.Provider, { value: contextValues, children: children }));
};
export default SnackbarProvider;
