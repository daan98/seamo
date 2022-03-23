import './Search.css'
import './Genre.css'
import React from "react";
import Header from './Header';
import Footer from './Footer';
import { play, info } from './Data';
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Genre(props){
    const params = useParams();
    const movies = useSelector(state => state.movies);

    const infoMovie = (e, link, linkLang) => {
        if(e.target.nearestViewportElement.className.animVal.includes('info')) window.open(`https://${linkLang}.wikipedia.org/wiki/${link}`)
    };

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="container">
                    <h1 className="title yellow border">{params.id}</h1>
                    <div className="genre-container">
                        {movies.map(movie => {
                            if(movie.genre.includes(params.id.toLowerCase())){
                                const path = `/movie/${movie._id}`;
                                return(
                                    <div key={movie._id} className="genre-info">
                                        <img src={movie.url} />
                                        <div className="synopsis show-search">
                                            <p className="yellow preview-info"><span>{movie.name} </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="yellow movie-icon">{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e, movie.wiki, movie.wikiLang)}>{info}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Genre;