import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import { getSocialLink } from "./Data";

function Footer(){
    const theme = useContext(ThemeContext);

    const onMouseEnter = (e) => {
        e.target.style.color = theme.btnForeground;
    };

    const onMouseLeave = (e) => {
        e.target.style.color = theme.secondColor;
    };
    return(
        <div>
            <footer className="center" style={{ backgroundColor: theme.mainColor, borderTopColor: theme.secondColor }}>
                {getSocialLink.map(socialLink =>(
                    <NavLink key={socialLink.id} to={socialLink.url} target="_blank" style={{ color:theme.secondColor }} onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}> {socialLink.icon} </NavLink>
                ))}
                <p style={{ color: theme.secondColor }}>Copyright &copy; 2022 Any Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;