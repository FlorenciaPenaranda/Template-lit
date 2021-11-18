import { agregarImagenFetch } from "../fetchs.js";
import {
    GET,
    GET_SUCCESS,
    GET_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    AGREGAR_IMAGEN,
    AGREGAR_IMAGEN_SUCCESS,
} from "./actions";
import { showSpinner, hideSpinner, showError } from "../ui/actions";
import { apiRequest, apiUpdate, apiDelete, apiAdd, apiAction } from "../api/actions";
import { goTo } from "../routing/actions.js";

export const get =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === GET) {
            dispatch(apiRequest(/*ingresoFetch,*/, action.options, GET_SUCCESS, GET_ERROR));
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


export const add =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === ADD) {
            dispatch(apiAdd(documentacionFetch, action.item, ADD_SUCCESS, ADD_ERROR));
        }
    };



export const agregarImagen =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === AGREGAR_IMAGEN) {
            const key = "pId=" + action.id + ",pNombre='" + action.nombre + "'";
            const body = action.imagen;
            const accion = "";
            dispatch(apiAction(agregarImagenFetch, body, key, accion, AGREGAR_IMAGEN_SUCCESS, ADD_ERROR));
        }
    };

export const middleware = [updateItem, get, processGet, processError, processDelete, updateField, remove, add, processUpdateField, agregarImagen];
