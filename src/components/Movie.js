import './Carousel.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import { info, play } from "./Data";
import { NavLink, useParams } from 'react-router-dom';
import EmbedVideo from './EmbedVideo';
import { useSelector } from 'react-redux';

function Movie(props){
    const params = useParams();
    const movies = useSelector(state => state.movies);
    const result = movies.find(movie => movie._id === params.id);

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
    
    return(
        <div id='main-element'>
            <Header />
            <div className='background'>
                <div className='movie-container' style={{paddingBottom:'30px'}}>
                    <div className='container'>
                    <h1 className='title yellow'>{result.name}</h1>
                    <div className='setting-container' style={{paddingTop: 'o'}}>
                        <div>
                            <img src={result.url} alt={result.name} />
                        </div>
                        <div>
                            <h3 className='yellow'>Description</h3>
                            <p className='yellow'>{result.description}</p>
                            <h3 className='yellow'>Guest:</h3>
                            <p className='yellow'>{result.guest.join(', ')}</p>
                            <h3 className='yellow'>Genre:</h3>
                            <p className='yellow'>{result.genre.join(', ')}</p>
                        </div>
                    </div>

                    <h1 className='yellow title' style={{textAlign: 'center', margin: '40px auto 15px'}}>Trailer</h1>
                    <EmbedVideo embedId={result.trailer} />

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
                        {movies.map(movie => {
                            const path = `/movie/${movie._id}`
                            if(movie.recent){
                                return(
                                    <div key={movie._id} className="carousel-item">
                                        <div className="image-container">
                                            <img src={movie.url} alt={movie.name} />
                                        </div>
                                        <div className="movie-info-container">
                                            <p className="yellow preview-info"><span>{movie.name} </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="yellow movie-icon">{play}</NavLink>
                                            <p id="info" className="yellow movie-icon" onClick={(e) => infoMovie(e, movie.wiki, movie.wikiLang)}>{info}</p>
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