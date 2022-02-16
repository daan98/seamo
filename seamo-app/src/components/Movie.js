import './Movie.css';
import './Carousel.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import { getMoviesImage, info, play } from "./Data";
import { NavLink } from 'react-router-dom';
import EmbedVideo from './EmbedVideo';

function Movie(){
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

    return(
        <div id='main-element'>
            <Header />
            <div className='background'>
                <div className='movie-container' style={{paddingBottom:'30px'}}>
                    <div className='container'>
                    <h1 className='title yellow'>MOVIE TITLE</h1>
                    <div className='setting-container' style={{paddingTop: 'o'}}>
                        <div>
                            <img src={getMoviesImage[1].url} />
                        </div>
                        <div>
                            <h3 className='yellow'>Description</h3>
                            <p className='yellow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim, lacus vel placerat laoreet, mi arcu suscipit libero, eget tempus felis augue a arcu. In malesuada sollicitudin ullamcorper. Donec a justo a odio tristique lobortis at quis lorem. Aenean ut porta dui.</p>
                            <h3 className='yellow'>Guest:</h3>
                            <p className='yellow'>fulano, mendana, futano, yolo</p>
                            <h3 className='yellow'>Genre:</h3>
                            <p className='yellow'>action, comedy</p>
                        </div>
                    </div>

                    <h1 className='yellow title' style={{textAlign: 'center', margin: '40px auto 15px'}}>Trailer</h1>
                    <EmbedVideo embedId='UrIbxk7idYA' />

                    </div>

                    <h1 className='yellow title'>Recommended</h1>
                    <Carousel
                    responsive={secondaryResponsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
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
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Movie;