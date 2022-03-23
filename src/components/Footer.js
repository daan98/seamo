import React from "react";
import { NavLink } from "react-router-dom";
import { getSocialLink } from "./Data";

function Footer(){
    return(
        <div>
            <footer className="center">
                {getSocialLink.map(socialLink =>(
                    <NavLink key={socialLink.id} className="yellow" to={socialLink.url} target="_blank"> {socialLink.icon} </NavLink>
                ))}
                <p className="yellow">Copyright &copy; 2022 Any Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;