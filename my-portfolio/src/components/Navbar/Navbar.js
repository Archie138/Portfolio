import React from "react";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar"> 
            <ul className="menu">
                <li> <a href="#home"> Home </a>  </li>
                <li> <a href="#about"> About </a>  </li>
                <li> <a href="#work"> Work </a>  </li>
                <li> <a href="#projects"> Projects </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
            </ul>
        </div>
    ) 
};