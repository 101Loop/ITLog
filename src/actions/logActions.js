import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

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

// Delete Logs from DB.
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
            await fetch(`/logs/${id}`, {
                method: "DELETE"
            });

            dispatch({
              type: DELETE_LOG,
              payload: id,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }    
    }
}

// SetCurrent Log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clear Current Log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
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