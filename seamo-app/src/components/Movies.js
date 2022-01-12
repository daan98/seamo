import React from "react";
import Footer from "./Footer";
import Header from "./Header";
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
            <div className="movie-container">
                <h1 className="title center yellow">Added Recently</h1>
                <Carousel 
                 responsive={mainResponsive}
                 swipeable={false}
                 draggable={false}
                 showDots={false}
                 infinite={true}
                 autoPlay={true}
                 autoPlaySpeed={2000}
                 keyBoardControl={true}
                 >
                    <div>Item 1</div>
                </Carousel>
                <h1 className="title yellow">Trend</h1>
                <h1 className="title yellow">For You</h1>
            </div>
            <section className="background"></section>
            <Footer />
        </div>
    );
}

export default Movies;