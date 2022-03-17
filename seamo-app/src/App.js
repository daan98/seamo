import "react-multi-carousel/lib/styles.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FoundError from './components/FoundError';
import Movies from './components/Movies';
import Search from './components/Search';
import Setting from './components/Setting';
import Welcome from './components/Welcome';
import Social from './components/Social';
import Movie from "./components/Movie";
import Genre from "./components/Genre";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenres } from "./actions/GenreActions";
import { getMovies } from "./actions/MoviesActions";
import { getUsers } from "./actions/UserActions";

function App() {
  const genreDispatch = useDispatch();
  const moviesDispatch = useDispatch();
  const userDispatch = useDispatch();

  useEffect( () =>{
    genreDispatch(getGenres());
    moviesDispatch(getMovies());
    userDispatch(getUsers());
  }, [genreDispatch, moviesDispatch, userDispatch]);
  
  return (
    <div>
      <Routes>
        <Route path="/genre/:id" element={<Genre />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/facebook" element={<Social socialMedia="facebook" />} />
        <Route path="/instagram" element={<Social socialMedia="instagram" />} />
        <Route path="/twitter" element={<Social socialMedia="twitter" />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<FoundError />} />
      </Routes>
    </div>
  );
}

export default App;
