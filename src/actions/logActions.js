import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
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

// Upadte Logs from DB.
export const updateLog = log => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await fetch(`/logs/${log.id}`, {
              method: "PUT",
              body: JSON.stringify(log),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
            
            dispatch({
              type: UPDATE_LOG,
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

// Search Logs from DB.
export const searchLogs = (text) => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await fetch(`/logs?q=${text}`);
            const data = await res.json();

            dispatch({
              type: SEARCH_LOGS,
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
                    "Content-Type": "application/json"
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