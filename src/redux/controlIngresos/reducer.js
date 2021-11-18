import { GET, GET_SUCCESS, GET_ERROR, UPDATE_FIELD_SUCCESS, UPDATE_FIELD } from "./actions";
import { store } from "../store";

const initialState = {
    entities: [],
    timeStamp: null,
    errorTimeStamp: null,
    updateFieldTimeStamp: null,
    agregarImagenTimeStamp: null,
    options: null,
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
        case UPDATE_FIELD_SUCCESS:
            /*newState.entities = newState.entities.map((ingreso) => {
                if (ingreso.id == action.id) {
                    const ingresoAux = { ...ingreso };
                    ingresoAux.name = action.value;
                    newState.timeStamp = new Date().getTime();
                    return ingresoAux;
                }
            });*/
            break;
        case AGREGAR_IMAGEN_SUCCESS:
            newState.agregarImagenTimeStamp = new Date().getTime();
            break;
    }
    return newState;
};
