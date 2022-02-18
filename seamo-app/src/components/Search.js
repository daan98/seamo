import './Search.css';
import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getGenresImage } from './Data'
import { NavLink } from 'react-router-dom';

function Search(props){
    const { changeImg } = props;

    useEffect(() => {
        setInterval(() => {
            changeImg();
        }, 5000);
    }, []);

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="container">
                    <h1 className="title yellow border">Genres</h1>
                    <div className="genre-container">
                        {getGenresImage.map(genre => (
                            <div key={genre.id} className="genre-info">
                                <img src={genre.url} />
                                <NavLink to='/genre' className="synopsis">
                                    <p>{genre.genre}</p>
                                    <div className="show show-search"></div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Search;