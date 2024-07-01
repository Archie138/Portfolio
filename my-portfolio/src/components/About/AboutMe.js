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
                {/* <div className="my-img">
                    <Image src="/ak_img.png" width={500} height={300}></Image>
                </div> */}
                
            </div>
        </>
    )
}


