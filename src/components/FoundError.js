import './Welcome.css'
import './FoundError.css'
import React from "react";
import { NavLink } from "react-router-dom";

function FoundError(){
    return(
        <div className="enter">
            <div className="background center">
                <div className="error-container">
                    <h1 className="title yellow">Error</h1>
                    <p className="yellow">You do not have access to the page you are trying to visit or it does not exist</p>
                    <NavLink to="/movies" className="btn yellow">Go back to Movies</NavLink>
                </div>
            </div>
        </div>
    );
}

export default FoundError;