import './Welcome.css';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

function Welcome(){
    const theme = useContext(ThemeContext);

    const MouseEnter = (e) => {
        e.target.style.color = theme.btnForeground;
        e.target.style.borderColor = theme.btnForeground;
        e.target.style.background = theme.btnBackground;
    };

    const MouseLeave = (e) => {
        e.target.style.color = theme.secondColor;
        e.target.style.borderColor = theme.secondColor;
        e.target.style.background = theme.initialBtnBackground;
    }

    return(
        <div className="center enter">
            <Link to="movies" className="title initial-btn" style={{ color: theme.secondColor }}  onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} >See Catalogue</Link>
            <section className='background' style={{background: theme.strongBackground}}></section>
        </div>
    );
}

export default Welcome;