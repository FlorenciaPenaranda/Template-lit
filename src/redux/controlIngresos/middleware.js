import { agregarImagenFetch } from "../fetchs.js";
import { GET, GET_SUCCESS, GET_ERROR, UPDATE_FIELD, UPDATE_FIELD_SUCCESS, UPDATE_FIELD_ERROR } from "./actions";
import { showSpinner, hideSpinner, showError } from "../ui/actions";
import { apiRequest, apiUpdate, apiDelete, apiAdd, apiAction } from "../api/actions";
import { goTo } from "../routing/actions.js";

export const get =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET) {
            //dispatch(apiRequest(/*ingresoFetch,*/, action.options, GET_SUCCESS, GET_ERROR));
        }
    };

export const processGet =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_SUCCESS) {
            //dispatch(add())
            //dispatch(updateDoc(2, "Descripcion", "Normativa de Afiliaciones"));
        }
    };

export const processError =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET_ERROR) {
            dispatch(showError(action.payload.message));
        }
    };

export const updateField =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === UPDATE_FIELD) {
            const body = { Id: action.id };
            body[action.name] = action.value;

            dispatch(apiUpdate(/*fetch*/, body, UPDATE_FIELD_SUCCESS, UPDATE_FIELD_ERROR));
        }
    };

export const processUpdateField =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === UPDATE_FIELD_SUCCESS ) {
            
        }
    };

export const middleware = [get, processGet, processError,updateField, processUpdateField];
