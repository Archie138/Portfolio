import React from "react";

export const Navbar = () => {
    return (
        <div className="relative flex items-center pt-[19px] ml-[35%]"> 
            <ul className="flex gap-[20px] list-none">
                <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#home"> Home </a>  </li>
                <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#about"> About </a>  </li>
                <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#work"> Work </a>  </li>
                <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#projects"> Projects </a> </li>
            </ul>
        </div>
    ) 
};