import "react-multi-carousel/lib/styles.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FoundError from './components/FoundError';
import Movies from './components/Movies';
import Search from './components/Search';
import Setting from './components/Setting';
import Welcome from './components/Welcome';
import Social from './components/Social';
import { getMoviesImage } from './components/Data'
import Movie from "./components/Movie";
import Genre from "./components/Genre";
import FetchData from "./components/FetchData";

function App() {

  function changeImage(e) {
    let mainElement = document.getElementById("main-element");
    const urlImage = Math.random() * getMoviesImage.length;
    const showImage = Math.round(urlImage);
    
    mainElement.style.backgroundImage = `url(${getMoviesImage[showImage].url})`;
  }

  return (
    <div>
      <Routes>
        <Route path="/movies" element={
          // <FetchData />
          <Movies />
        } />
        <Route path="/movie" element={<Movie changeImg={changeImage} />} />
        <Route path="/search" element={<Search changeImg={changeImage} />} />
        <Route path="/setting" element={<Setting changeImg={changeImage} />} />
        <Route path="/genre" element={<Genre changeImg={changeImage} />} />
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
