import { combineReducers } from 'redux';
import genres from './GenreReducers';
import movies from './MovieReducers';
import users from './UserReducers';

export default combineReducers({
    genres,
    movies,
    users
});