import { GET, GET_SUCCESS, GET_ERROR, ADD_SUCCESS, AGREGAR_IMAGEN, AGREGAR_IMAGEN_SUCCESS } from "./actions";
import { store } from "../store";

const initialState = {
    entities: [],
    timeStamp: null,
    errorTimeStamp: null,
    options: null,
    mesanjeError: null,
    agregarImagenTimeStamp: null,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };
    switch (action.type) {
        case GET:
            newState.options = action.options;
            break;
        case GET_SUCCESS:
            newState.entities = action.payload.receive;
            newState.timeStamp = new Date().getTime();
            break;
        case GET_ERROR:
            newState.errorTimeStamp = new Date().getTime();
            break;
        case AGREGAR_IMAGEN_SUCCESS:
            newState.agregarImagenTimeStamp = new Date().getTime();
            break;
    }
    return newState;
};
