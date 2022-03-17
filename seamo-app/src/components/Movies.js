
import './Movies.css';
import './Carousel.css';
import React, { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import Footer from "./Footer";
import Header from "./Header";
import { info, play } from "./Data";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Movies(props){
    const movies = useSelector(state => state.movies);
    
    const mainResponsive = {
        uniqueSize: {
            breakpoint: {max: 4000, min: 0},
            items: 1,
        }
    }
    
    const secondaryResponsive = {
        superLarge: {
            breakpoint: { max: 4000, min: 3001 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1201},
            items: 4
        },
        tablet: {
            breakpoint: { max: 1200, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 500 },
            items: 2
        },
        mobileS: {
            breakpoint: { max: 499, min: 0 },
            items: 1
        }
    };

    const infoMovie = (e, link, linkLang) => {
        if(e.target.nearestViewportElement.className.animVal.includes('info')) window.open(`https://${linkLang}.wikipedia.org/wiki/${link}`)
    };

    console.log(movies);

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="movie-container container">
                    <h1 className="title yellow" >Added Recently</h1>
                    <Carousel 
                    responsive={mainResponsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={90000}
                    pauseOnHover={true}
                    keyBoardControl={true}
                    >
                        {movies.map(movie => {
                            if(movie.recent){
                                return(
                                    <div key={movie._id} className="main-carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="movie Image" />
                                        </div>
                                        <div className='main-description'>
                                            <p className="yellow"><span>{movie.name}: </span>{movie.description}</p>
                                        </div>
                                    </div>
                                );
                            } else{ return ( true )}
                        })}
                    </Carousel>

                    <h1 className="title yellow">Trend</h1>
                    <Carousel
                    responsive={secondaryResponsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={90000}
                    keyBoardControl={true}
                    className="carousel-container"
                    >
                        {movies.map(movie => {
                            if(movie.recent){
                                const path = `/movie/${movie._id}`;
                                return(
                                    <div key={movie._id} className="carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="movie image" />
                                        </div>
                                        <div className="movie-info-container">
                                            <p className="yellow preview-info"><span>{movie.name}: </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="yellow movie-icon" >{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e, movie.wiki, movie.wikiLang)}>{info}</p>
                                        </div>
                                    </div>
                                );
                            } else { return( true ); }
                        })}
                    </Carousel>

                    <h1 className="title yellow">For You</h1>
                    <Carousel
                    responsive={secondaryResponsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={90000}
                    keyBoardControl={true}
                    className="carousel-container"
                    >
                        {movies.map(movie => {
                            if(movie.recent){
                                const path = `/movie/${movie._id}`;
                                return(
                                    <div key={movie._id} className="carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="movie image" />
                                        </div>
                                        <div className="movie-info-container">
                                            <p className="yellow preview-info"><span>{movie.name}: </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="yellow movie-icon" >{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e, movie.wiki)}>{info}</p>
                                        </div>
                                    </div>
                                );
                            } else{ return(true) }
                        })}
                    </Carousel>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Movies;