import './App.css';
import { Route, Routes } from 'react-router-dom';
import FoundError from './components/FoundError';
import Movies from './components/Movies';
import Search from './components/Search';
import Setting from './components/Setting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<FoundError />} />
      </Routes>
    </div>
  );
}

export default App;
