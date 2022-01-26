import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getGenresImage } from './Data'

function Search(){
    return(
        <div>
            <Header />
            <div className="background">
                <div className="container">
                    <h1 className="title yellow border">Genres</h1>
                    <div className="genre-container">
                        {getGenresImage.map(genre => (
                            <div key={genre.id} className="genre-info">
                                <img src={genre.url} />
                                <div className="synopsis">
                                    <p>{genre.genre}</p>
                                    <div className="show show-search"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <section className="background"></section> */}
            </div>
            <Footer />
        </div>
    );
}

export default Search;