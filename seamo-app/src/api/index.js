import axios from 'axios';

const genresUrl = 'http://localhost:3001/genre';
const moviesUrl = 'http://localhost:3001/movie'
// const singleMovieUrl = `http://localhost:3001/movie/${id}`;
const usersUrl = 'http://localhost:3001/user';
// const singleUserUrl = `http://localhost:3001/user/${id}`;

export const GetGenres = () => axios.get(genresUrl);
export const GetMovies = () => axios.get(moviesUrl);
// export const GetMovieById = () => axios.get(singleMovieUrl);
export const GetUsers = () => axios.get(usersUrl);
// export const GetUserById = () => axios.get(singleUserUrl);
// export const updateUser = () => axios.put(singleUserUrl);
