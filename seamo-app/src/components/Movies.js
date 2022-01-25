
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getUserInfo } from "./Data";
import Carousel from 'react-multi-carousel';

function Movies(){
    const mainResponsive = {
        uniqueSize: {
            breakpoint: {max: 4000, min: 0},
            items: 1,
        }
    }
    return(
        <div>
            <Header />
            <div className="background">
                <div className="movie-container container">
                    <h1 className="title center yellow">Added Recently</h1>
                    <Carousel 
                    responsive={mainResponsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={false}
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
                    <h1 className="title yellow">For You</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Movies;