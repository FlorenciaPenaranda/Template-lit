export const GET = "[registroIngresos] get";
export const GET_SUCCESS = "[registroIngresos] get succes";
export const GET_ERROR = "[registroIngresos] get error";

export const ADD = "[registroIngresos] Add";
export const ADD_SUCCESS = "[registroIngresos] Add Sucess";
export const ADD_ERROR = "[registroIngresos] Add Error";

export const AGREGAR_IMAGEN = "[registroIngresos] Agregar Imagen";
export const AGREGAR_IMAGEN_SUCCESS = "[registroIngresos] Agregar Imagen Success";

export const get = (options) => ({
    type: GET,
    options: options,
});
/* export const get = function (options) {
    return { type: GET, options: options }
}*/

export const add = (item) => ({
    type: ADD,
    item: item,
});

export const agregarImagen = (id, nombre, imagen) => ({
    type: AGREGAR_IMAGEN,
    id: id,
    nombre: nombre,
    imagen: imagen,
});
