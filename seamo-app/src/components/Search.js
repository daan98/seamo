import './Search.css';
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Search(props){
    const genre = useSelector(state => state.genres );

    return(
        <div id="main-element">
            <Header />
            <div className="background">
                <div className="container">
                    <h1 className="title yellow border">Genres</h1>
                    <div className="genre-container">
                        {genre.map(genre => {
                            const path = `/genre/${genre.genre}`
                            return(
                                (
                                    <div key={genre._id} className="genre-info">
                                        <img src={genre.url} />
                                        <NavLink to={path} className="synopsis" >
                                            <p>{genre.genre}</p>
                                            <div className="show show-search"></div>
                                        </NavLink>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Search;