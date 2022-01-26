
import React from "react";
import Carousel from 'react-multi-carousel';
import Footer from "./Footer";
import Header from "./Header";
import { getMoviesImage, getUserInfo } from "./Data";

function Movies(){
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
            breakpoint: { max: 3000, min: 1025},
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2
        }
    };

    const changeImage = () => {
        let backImage = document.getElementsByClassName("image-background");
        console.log(backImage);
        // backImage.style.backgroundColor = "black";
        /* setTimeout(() => {
        }, 2000); */
    }

    changeImage();

    return(
        <div className="image-background">
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
                    keyBoardControl={true}
                    >
                        <div className="main-carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                        </div>
                        <div className="main-carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                        </div>
                        <div className="main-carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                        </div>
                        <div className="main-carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                        </div>
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
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
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
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="image-container">
                                <img src={getUserInfo.img} alt="TEST" />
                            </div>
                            <div className="movie-info-container">
                                <p className="yellow"><span>John Wick: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, dapibus a iaculis sit amet, rutrum et tellus. Nullam sed odio vestibulum, scelerisque tellus mollis, consequat mi. Nullam eget blandit sem, nec porttitor urna. Etiam mattis lorem ut dolor ornare, ut consectetur justo volutpat. Phasellus vitae imperdiet turpis.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Movies;