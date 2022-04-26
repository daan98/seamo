import axios from 'axios';

const genresUrl = 'https://seamo-server.herokuapp.com/genre';
const moviesUrl = 'https://seamo-server.herokuapp.com/movie'
const usersUrl = 'https://seamo-server.herokuapp.com/user';

export const GetGenres = () => axios.get(genresUrl);
export const GetMovies = () => axios.get(moviesUrl);
export const GetUsers = () => axios.get(usersUrl);