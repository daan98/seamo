import React, { useContext, useEffect, useState } from "react";
import { getNavbarLink } from './Data'
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

function Header(props){
    const { page } = props;
    const navbar = document.getElementById("navbar");
    const [ scrollDir, setScrollDir ] = useState("scrolling up");
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const threshold = 0;
        let lastIndexY = window.scrollY;
        let ticking = false;

        const updateDir = () => {
            const indexY = window.scrollY;
    
            if(Math.abs(indexY - lastIndexY) < threshold){
                ticking = false;
                return;
            }

            setScrollDir(indexY > lastIndexY ? "scrolling down" : "scrolling up");

            if(scrollDir === "scrolling down"){
                navbar.classList.add("hide-nav");
            } else if(scrollDir === "scrolling up"){
                navbar.classList.remove("hide-nav");
            }


            lastIndexY = indexY;
            ticking = false;
        };

        const onScroll = () => {
            if(!ticking){
                window.requestAnimationFrame(updateDir);
                ticking = true
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onscroll)
    },[scrollDir]);

    const onMouseEnter = (e) => {
        e.target.style.color = theme.btnForeground;
        e.target.style.backgroundColor = theme.btnBackground;
        e.target.style.borderColor = theme.btnForeground;
    };

    const onMouseLeave = (e) => {
        e.target.style.color = theme.secondColor;
        e.target.style.backgroundColor = theme.initialBtnBackground;
        e.target.style.borderColor = theme.secondColor;
        switch (page) {
            case "Movies":
                setTimeout(() => {
                    document.querySelectorAll('.btn')[1].attributes[3].nodeValue = `color: ${theme.btnForeground}; background-color: ${theme.btnBackground}; border-color: ${theme.btnForeground}`;
                }, 10);
                break;
            case "Search":
                setTimeout(() => {
                    document.querySelectorAll('.btn')[2].attributes[3].nodeValue = `color: ${theme.btnForeground}; background-color: ${theme.btnBackground}; border-color: ${theme.btnForeground}`;
                }, 10);
                break;
            case "Setting":
                setTimeout(() => {
                    document.querySelectorAll('.btn')[3].attributes[3].nodeValue = `color: ${theme.btnForeground}; background-color: ${theme.btnBackground}; border-color: ${theme.btnForeground}`;;
                }, 10);
                break;
            default:
                break;
        }
    };

    return(
        <div>
            <nav id="navbar">
                {getNavbarLink.map(link => (
                    <NavLink
                     key={link.id}
                     style={({isActive}) => {
                        return{ color: isActive ? theme.btnForeground : theme.secondColor, backgroundColor: isActive ? theme.btnBackground : theme.initialBtnBackground, borderColor: isActive ? theme.btnForeground : theme.secondColor };
                    }}
                     className="center btn"
                     to={link.url}
                     onMouseEnter={(e) => onMouseEnter(e)}
                     onMouseLeave={(e) => onMouseLeave(e)}
                    >
                        {link.icon}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Header;