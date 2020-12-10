import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG
} from "./types"

// Get Logs from DB.
export const getLogs = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await fetch("/logs");
            const data = await res.json();

            dispatch({
              type: GET_LOGS,
              payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }    
    }
}

// Add Logs to DB.
export const addLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await fetch("/logs", {
                method: "POST",
                body: JSON.stringify(log),
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await res.json();

            dispatch({
              type: ADD_LOG,
              payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }    
    }
}

// SET LOADING TO TRUE
export const setLoading = () => {
    return { type: SET_LOADING}
}