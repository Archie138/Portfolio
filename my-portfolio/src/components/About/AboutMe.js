import React from "react";
import "./AboutMe.css";
import Image from "next/image";

export const AboutMe = () => {
    return (
        <>
            <div className="about-me">
                <div className="details">
                    <p className="name"> Hi! I'm Archisa Kar </p>
                    <p className="me-tag"> CS Graduate | AI Enthusiast </p>
                </div>
                <div className="my-img">
                    <img src="https://github.com/Archie138/Portfolio/blob/main/my-portfolio/public/images/ak_img.png?raw=true" className="transition duration-300 transform rounded-full shadow-lg h-15 w-15 md:w-60 md:h-60 hover:scale-110"></img>
                </div> 
                
            </div>
        </>
    )
}


