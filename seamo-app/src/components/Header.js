import React from "react";
import '../App.css';
import { getNavbarLink } from './Data'
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div>
            <nav>
                {getNavbarLink.map(link => (
                    <NavLink
                     key={link.id}
                     style={({isActive}) => {
                         return{ color: isActive ? "#000000" : "", backgroundColor: isActive ? "#049DB5" : "", borderColor: isActive ? "#000000" : "", };
                     }}
                     className="center btn yellow"
                     to={link.url}
                    >
                        {link.icon}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Header;