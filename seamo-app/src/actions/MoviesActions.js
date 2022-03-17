import * as api from '../api';

// ACTIONS CREATORS

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.GetMovies();
        dispatch({ type: 'GET_ALL_MOVIES', payload: data });
    } catch (err) {
        console.log(err.message);
    }
};