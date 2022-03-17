import * as api from '../api';

// ACTIONS CREATORS
export const getGenres = () => async (dispatch) => {
    try {
        const { data } = await api.GetGenres();
        dispatch({ type: 'GET_ALL_GENRES', payload: data });
    } catch (err) {
        console.log(err.message);
    }
};