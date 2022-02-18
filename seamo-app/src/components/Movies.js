
import './Movies.css';
import './Carousel.css';
import React, { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import Footer from "./Footer";
import Header from "./Header";
import { getMoviesImage, info, play } from "./Data";
import { NavLink } from 'react-router-dom';

function Movies(props){
    const { changeImg } = props
    
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
                        {getMoviesImage.map(movie => {
                            if(movie.recent){
                                return(
                                    <div key={movie.id} className="main-carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="TEST" />
                                        </div>
                                        <div className='main-description'>
                                            <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
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
                        {getMoviesImage.map(movie => {
                            if(movie.recent){
                                return(
                                    <div key={movie.id} className="carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="TEST" />
                                        </div>
                                        <div className="movie-info-container">
                                            <p className="yellow preview-info"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                            <NavLink id='play' to="/movie" className="yellow movie-icon">{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e)}>{info}</p>
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
                        {getMoviesImage.map(movie => {
                            if(movie.recent){
                                return(
                                    <div key={movie.id} className="carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt="TEST" />
                                        </div>
                                        <div className="movie-info-container">
                                            <p className="yellow preview-info"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                            <NavLink id='play' to="/movie" className="yellow movie-icon">{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e)}>{info}</p>
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