
import './Movies.css';
import './Carousel.css';
import React, { useContext } from "react";
import Carousel from 'react-multi-carousel';
import Footer from "./Footer";
import Header from "./Header";
import { info, play } from "./Data";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App';

function Movies(){
    const movies = useSelector(state => state.movies);
    const theme = useContext(ThemeContext);
    
    const onLoad = () => {
        // GIVING TIME TO RECOGNIZE ALL DOTS
        setTimeout(() => {
            const dots = document.querySelectorAll('.react-multi-carousel-dot button');
            const arrows = document.querySelectorAll('.react-multiple-carousel__arrow');
            const arrowsBefore = document.querySelectorAll('.react-multiple-carousel__arrow');

            console.log(arrowsBefore);

            dots.forEach(dot =>{
                dot.style.setProperty('--second-color', theme.secondColor);
                
                if (dot.parentElement.classList[1]) dot.style.setProperty('--btn-background', theme.btnBackground);
            });

            arrows.forEach(arrow => {
                arrow.style.setProperty('--second-color', theme.secondColor);
            });

            arrows[0].style.backgroundColor = theme.strongBackground;
            arrows[1].style.backgroundColor = theme.strongBackground;

            /* for (let i = 0; i = 1; i++) {
                arrows[i].style.backgroundColor = theme.mainColor;
            } */
        }, 100);
    }

    // DETECT ON MOUSE LEAVE AND HOVER AFTER 150 MIL-SECONDS
    setTimeout(() => {
        // HOVER EFFECT FOR THE FIRST CAROUSEL BUTTON
        document.querySelector('.react-multiple-carousel__arrow--left').addEventListener('mouseenter', () => {
            document.querySelector('.react-multiple-carousel__arrow--left').style.backgroundColor = theme.btnBackground;
        });
        document.querySelector('.react-multiple-carousel__arrow--left').addEventListener('mouseleave', () => {
            document.querySelector('.react-multiple-carousel__arrow--left').style.backgroundColor = theme.strongBackground;
        });

        // HOVER EFFECT FOR THE SECOND CAROUSEL BUTTON
        document.querySelector('.react-multiple-carousel__arrow--right').addEventListener('mouseenter', () => {
            document.querySelector('.react-multiple-carousel__arrow--right').style.backgroundColor = theme.btnBackground;
        });
        document.querySelector('.react-multiple-carousel__arrow--right').addEventListener('mouseleave', () => {
            document.querySelector('.react-multiple-carousel__arrow--right').style.backgroundColor = theme.strongBackground;
        });

    }, 150);

    let i = 0;

    /* const counting = () => {
        i++
        console.log(i);
    } */

    const onMouseOverElement = (e) => {};

    const onMouseLeaveElement = (e) => {};

    // useEffect(() => {
    //     onLoad();
    // },[]);

    // document.addEventListener('click', onLoad());
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

    return(
        <div id="main-element" >
            <Header page="Movies" />
            <div className="background" style={{background: theme.strongBackground}} onLoad={onLoad()} >
                <div className="movie-container container">
                    <h1 className="title" style={{color: theme.secondColor}} >Added Recently</h1>
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
                                        <div style={{backgroundColor: theme.strongBackground}} className='main-description'>
                                            <p style={{color: theme.secondColor}} ><span>{movie.name}: </span>{movie.description}</p>
                                        </div>
                                    </div>
                                );
                            } else{ return ( true )}
                        })}
                    </Carousel>

                    <h1 className="title" style={{color: theme.secondColor}} >Trend</h1>
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
                                        <div className="movie-info-container" style={{backgroundColor: theme.weakBackground}} >
                                            <p className="preview-info" style={{color: theme.secondColor}} ><span>{movie.name}: </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="movie-icon" style={{color: theme.secondColor}} >{play}</NavLink>
                                            <p id="info" className="movie-icon" style={{color: theme.secondColor}} onClick={(e) => infoMovie(e, movie.wiki, movie.wikiLang)}>{info}</p>
                                        </div>
                                    </div>
                                );
                            } else { return( true ); }
                        })}
                    </Carousel>

                    <h1 className="title" style={{color: theme.secondColor}} >For You</h1>
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
                                        <div className="movie-info-container" style={{backgroundColor: theme.weakBackground}} >
                                            <p className="preview-info" style={{color: theme.secondColor}} ><span>{movie.name}: </span>{movie.bitDescription !== '-' ? movie.bitDescription : movie.description}</p>
                                            <NavLink id='play' to={path} className="movie-icon" style={{color: theme.secondColor}} >{play}</NavLink>
                                            <p id="info" className="movie-icon" style={{color: theme.secondColor}} onClick={(e) => infoMovie(e, movie.wiki)}>{info}</p>
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