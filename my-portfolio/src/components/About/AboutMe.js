import React from "react";

export const AboutMe = () => {
    return (
        <>
            <div className="items-center md:flex pt-[15%]">
                <div className="ml-[5%] mr-0">
                    <p className=" text-black font-normal text-[44px] md:text-[64px] leading-normal mb-0"> Hi! I'm Archisa Kar </p>
                    <p className="text-black font-normal text-[24px] leading-normal mt-[20px]"> CS Graduate | ML Engineer </p>  
                    <p> Turning coffee into code </p> 
                </div>
                <div className=" ml-[15%] mt-[5%]">
                    <img src="https://github.com/Archie138/Portfolio/blob/main/my-portfolio/public/images/ak_img.png?raw=true" className="transition duration-300 transform rounded-full shadow-lg z-1 h-15 w-15 md:w-60 md:h-60 hover:scale-110"></img>
                </div> 
                
            </div>
        </>
    )
}


