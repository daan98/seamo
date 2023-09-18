import React, { useEffect, useState } from "react";
import { getNavbarLink } from "./Data";
import { NavLink } from "react-router-dom";

function Header() {
  const navbar = document.getElementById("navbar");
  const [scrollDir, setScrollDir] = useState("scrolling up");

  useEffect(() => {
    const threshold = 0;
    let lastIndexY = window.scrollY;
    let ticking = false;

    const updateDir = () => {
      const indexY = window.scrollY;

      if (Math.abs(indexY - lastIndexY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(indexY > lastIndexY ? "scrolling down" : "scrolling up");

      if (scrollDir === "scrolling down") {
        navbar.classList.add("hide-nav");
      } else if (scrollDir === "scrolling up") {
        navbar.classList.remove("hide-nav");
      }

      lastIndexY = indexY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, [scrollDir]);

  return (
    <div>
      <nav id="navbar">
        {getNavbarLink.map((link) => (
          <NavLink
            key={link.id}
            style={({ isActive }) => {
              return {
                color: isActive ? "#000000" : "",
                backgroundColor: isActive ? "#049DB5" : "",
                borderColor: isActive ? "#000000" : "",
              };
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
