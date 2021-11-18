export const GET = "[controlIngresos] get";
export const GET_SUCCESS = "[controlIngresos] get succes";
export const GET_ERROR = "[controlIngresos] get error";

export const UPDATE_FIELD = "[controlIngresos] Update Field";
export const UPDATE_FIELD_SUCCESS = "[controlIngresos] Update Field Sucess";
export const UPDATE_FIELD_ERROR = "[controlIngresos] Update Field Error";

export const get = (options) => ({
    type: GET,
    options: options,
});

export const update = (id, name, value) => ({
    //clave valor de la hora de salida
    type: UPDATE_FIELD,
    id: id,
    name: name,
    value: value,
});
