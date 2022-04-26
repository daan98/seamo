import './Search.css';
import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../App';

function Search(props){
    const genre = useSelector(state => state.genres );
    const theme = useContext(ThemeContext);

    return(
        <div id="main-element">
            <Header page="Search" />
            <div className="background" style={{backgroundColor: theme.weakBackground}}>
                <div className="container">
                    <h1 className="title border" style={{color: theme.secondColor, borderBottomColor: theme.secondColor }} >Genres</h1>
                    <div className="genre-container">
                        {genre.map(genre => {
                            const path = `/genre/${genre.genre}`
                            return(
                                (
                                    <div key={genre._id} className="genre-info">
                                        <img src={genre.url} />
                                        <NavLink to={path} className="synopsis" style={{backgroundColor: theme.weakBackground}} >
                                            <p style={{color: theme.secondColor}} >{genre.genre}</p>
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