import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getGenresImage } from './Data'

function Search(){
    return(
        <div>
            <Header />
            <div className="movie-container search-container">
                <h1 className="title yellow border" style={{width: "8.5%"}}>Genres</h1>
                <div className="genre-container">
                    {getGenresImage.map(genre => (
                        <div key={genres.id}>
                            <img src={genre.url} />
                        </div>
                    ))}
                </div>
            </div>
            <section className="background"></section>
            <Footer />
        </div>
    );
}

export default Search;