import * as api from '../api';

// ACTIONS CREATORS
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.GetUsers();
        dispatch({ type: 'GET_ALL_USERS', payload: data });
    } catch (err) {
        console.log(err.message);
    }
};

/* export const getUserById = () => async (dispatch) => {
    try {
        const { data } = await api.GetUserById();
        dispatch({ type: 'GET_SINGLE', payload: data });
    } catch (err) {
        console.log(err.message);
    }
} */