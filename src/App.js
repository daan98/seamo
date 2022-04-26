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
import { createContext, useEffect } from "react";
import { getGenres } from "./actions/GenreActions";
import { getMovies } from "./actions/MoviesActions";
import { getUsers } from "./actions/UserActions";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <ThemeContext.Provider value={theme.light} >
        <Routes>
          <Route path="/genre/:id" element={<Genre />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={ <Setting /> } />
          <Route path="/facebook" element={<Social socialMedia="facebook" />} />
          <Route path="/instagram" element={<Social socialMedia="instagram" />} />
          <Route path="/twitter" element={<Social socialMedia="twitter" />} />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<FoundError />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export const theme = {
  light: {
    mainColor: "#FFFFFF",
    secondColor: "#000000",
    btnBackground: "#999999",
    btnForeground: "#00008B",
    initialBtnBackground: "transparent",
    strongBackground: "rgba(255, 255, 255, .8)",
    weakBackground: "rgba(255, 255, 255, .2)",
    theme: "light"
  },
  dark: {
    mainColor: "#494949",
    secondColor: "#FF5E00",
    btnBackground: "#FFFFFF",
    btnForeground: "#000000",
    initialBtnBackground: "transparent",
    strongBackground: "rgba(73, 73, 73, .8)",
    weakBackground: "rgba(73, 73, 73, .2)",
    theme: "dark"
  },
  original: {
    mainColor: "#590178",
    secondColor: "#FFEE00",
    btnBackground: "#049DB5",
    btnForeground: "#000000",
    initialBtnBackground: "transparent",
    strongBackground: "rgba(89, 1, 120, .8)",
    weakBackground: "rgba(89, 1, 120, .2)",
    theme: "original"
  }
}

export const ThemeContext = createContext(theme);