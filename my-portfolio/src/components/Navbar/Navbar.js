import React from "react";

export const Navbar = () => {
    return (
        <>
            <div className="fixed z-40 flex justify-between w-full shadow-lg mr-[2%] pl-3 backdrop-filter backdrop-blur-lg bg-opacity-50"> 
                <ul className="flex gap-[20px] list-none">
                    <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#home"> Home </a> </li>
                    <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#about"> About </a> </li>
                    <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#work"> Work </a> </li>
                    <li> <a className=" text-black font-normal text-[20px] leading-normal no-underline" href="#projects"> Projects </a> </li>
                </ul>
                <ul className="flex gap-[20px] list-none">
                    <li> <a className=" mr-5 text-black font-normal text-[20px] leading-normal no-underline" href="https://mail.google.com/mail/?view=cm&to=kar.archisa@gmail.com"> Email </a> </li>
                    <li> <a className=" mr-5 text-black font-normal text-[20px] leading-normal no-underline"> Linkedin </a> </li>
                </ul>
            </div>
        </>
    );
};
