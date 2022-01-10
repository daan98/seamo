import React from "react";
import { NavLink } from "react-router-dom";
import { getSocialLink } from "./Data";

function Footer(){
    return(
        <div>
            <footer>
                {getSocialLink.map(socialLink =>(
                    <NavLink key={socialLink.id} to={socialLink.url} target="_blank"> {socialLink.icon} </NavLink>
                ))}
                <p>Copyright &copy; 2022 Any Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;