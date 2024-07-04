import React from "react";

export const AboutMe = () => {
    return (
        <>
            <div className="flex items-center mt-[10%]">
                <div className="ml-[5%] mr-0">
                    <p className=" text-black font-normal text-[64px] leading-normal mb-0"> Hi! I'm Archisa Kar </p>
                    <p className="text-black font-normal text-[24px] leading-normal mt-[20px]"> CS Graduate | ML Engineer </p>  {/* Turning coffee into code */}
                </div>
                <div className=" ml-[15%] mt-[5%]">
                    <img src="https://github.com/Archie138/Portfolio/blob/main/my-portfolio/public/images/ak_img.png?raw=true" className="transition duration-300 transform rounded-full shadow-lg h-15 w-15 md:w-60 md:h-60 hover:scale-110"></img>
                </div> 
                
            </div>
        </>
    )
}


