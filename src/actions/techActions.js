import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from "./types"

// Get Techs from DB.
export const getTechs = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await fetch("/techs");
            const data = await res.json();

            dispatch({
              type: GET_TECHS,
              payload: data,
            });
        } catch (error) {
            dispatch({
                type: TECHS_ERROR,
                payload: error.response.statusText
            })
        }    
    }
}


// SET LOADING TO TRUE
export const setLoading = () => {
    return { type: SET_LOADING}
}