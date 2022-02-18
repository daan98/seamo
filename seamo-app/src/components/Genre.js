import './Search.css'
import './Genre.css'
import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import { getGenresImage, play, info } from './Data';
import { NavLink } from 'react-router-dom';

function Genre(props){
    const { changeImg } = props;

    const infoMovie = (e) => {
        if(e.target.nearestViewportElement.className.animVal.includes('info')) window.open("https://www.youtube.com/c/ReneZZ")
    };

    useEffect(() => {
        setInterval(() => {
            changeImg();
        }, 5000);
    }, []);

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="container">
                    <h1 className="title yellow border">Action</h1>
                    <div className="genre-container">
                        {getGenresImage.map(genre => (
                            <div key={genre.id} className="genre-info">
                                <img src={genre.url} />
                                <div className="synopsis show-search">
                                    <p className="yellow preview-info"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <NavLink id='play' to="/movie" className="yellow movie-icon">{play}</NavLink>
                                    <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e)}>{info}</p>
                                    {/* <div className="show show-search"></div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Genre;