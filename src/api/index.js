import axios from "axios";

const genresUrl = `${process.env.REACT_APP_BACKEND_URL}/genre`;
const moviesUrl = `${process.env.REACT_APP_BACKEND_URL}/movie`;
// const singleMovieUrl = `http://localhost:3001/movie/${id}`;
const usersUrl = `${process.env.REACT_APP_BACKEND_URL}/user`;
// const singleUserUrl = `http://localhost:3001/user/${id}`;

export const GetGenres = () => axios.get(genresUrl);
export const GetMovies = () => axios.get(moviesUrl);
// export const GetMovieById = () => axios.get(singleMovieUrl);
export const GetUsers = () => axios.get(usersUrl);
// export const GetUserById = () => axios.get(singleUserUrl);
// export const updateUser = () => axios.put(singleUserUrl);
