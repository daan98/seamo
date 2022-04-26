import './Search.css'
import './Genre.css'
import React, { useContext } from "react";
import Header from './Header';
import Footer from './Footer';
import { play, info } from './Data';
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App';

function Genre(props){
    const params = useParams();
    const movies = useSelector(state => state.movies);
    const theme = useContext(ThemeContext);

    const infoMovie = (e, link, linkLang) => {
        if(e.target.nearestViewportElement.className.animVal.includes('info')) window.open(`https://${linkLang}.wikipedia.org/wiki/${link}`)
    };

    const MouseEnter = (e) => {
        e.target.style.color = theme.btnBackground;
    };

    const MouseLeave = (e) => {
        e.target.style.color = theme.secondColor;
    };
    

    return(
        <div id="main-element">
            <Header />
            <div className="background" style={{backgroundColor: theme.strongBackground}}>
                <div className="container">
                    <h1 className="title border" style={{color: theme.secondColor, borderBottomColor: theme.secondColor}}>{params.id}</h1>
                    <div className="genre-container">
                        {movies.map(movie => {
                            if(movie.genre.includes(params.id.toLowerCase())){
                                const path = `/movie/${movie._id}`;
                                return(
                                    <div key={movie._id} className="genre-info">
                                        <img src={movie.url} alt={movie.name} />
                                        <div className="synopsis show-search" style={{backgroundColor: theme.weakBackground}} >
                                            <p className="preview-info" style={{color: theme.secondColor}} ><span>{movie.name} </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="movie-icon" style={{color: theme.secondColor}} onMouseEnter={(e) => MouseEnter(e)} onMouseLeave={(e) => MouseLeave(e)} >{play}</NavLink>
                                            <p id="info" className="movie-icon" style={{color: theme.secondColor}} onClick={(e) => infoMovie(e, movie.wiki, movie.wikiLang)} onMouseEnter={(e) => MouseEnter(e)} onMouseLeave={(e) => MouseLeave(e)} >{info}</p>
                                        </div>
                                    </div>
                                );
                            } else{ return( true )}
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Genre;