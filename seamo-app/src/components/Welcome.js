import './Welcome.css';
import React from "react";
import { Link } from 'react-router-dom';

function Welcome(){
    return(
        <div className="center enter">
            <Link to="movies" className="yellow title initial-btn">See Catalogue</Link>
            <section className="background"></section>
        </div>
    );
}

export default Welcome;