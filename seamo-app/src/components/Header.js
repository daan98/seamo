import React, { useEffect, useState } from "react";
import '../App.css';
import { getNavbarLink } from './Data'
import { NavLink } from "react-router-dom";

function Header(){
    // const [ scroll, setScroll ] = useState(window.scrollY);
    const navbar = document.getElementById("navbar");
    const [ scrollDir, setScrollDir ] = useState("scrolling down");

    /* const handleScroll = (e) => {
        console.log(e);
        const createdWindow = e.currentTarget;
        if(scroll > createdWindow.scrollY){
            console.log("scrolling up");
        } else if(scroll < createdWindow.scrollY){
            console.log("scrolling down");
        }
        setScroll(createdWindow.scrollY);
    }; */

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

            if(scrollDir === "scrolling down"){ navbar.className = "hide-nav"; } else if(scrollDir === "scrolling up") { navbar.classList.remove("hide-nav") }

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
        console.log(scrollDir);

        return () => window.removeEventListener("scroll", onscroll)
    },[scrollDir]);

    return(
        <div>
            <nav id="navbar">
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