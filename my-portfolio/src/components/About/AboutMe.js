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
                    <img src="https://media.licdn.com/dms/image/D4D03AQFyTSQZB8dq7w/profile-displayphoto-shrink_400_400/0/1693465193498?e=1725494400&v=beta&t=3hLAB9M7AAeVgwsD5RdRa2oCGEEI18L5vLWn3ezap6Q" className="transition duration-300 transform rounded-full shadow-lg h-15 w-15 md:w-60 md:h-60 hover:scale-110"></img>
                </div> 
                
            </div>
        </>
    )
}


