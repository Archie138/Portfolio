import Image from "next/image"

export const AboutMe = () => {
    return (
        <>
            <div className="justify-center items-center md:flex pt-[10%]">
                <div className="ml-[5%] mr-0">
                    <p className=" text-black font-normal text-[35px] md:text-[50px] leading-normal mb-0"> Hi! I'm Archisa Kar </p>
                    <p className="text-black font-normal text-[24px] leading-normal mt-[20px]"> CS Graduate | ML Engineer </p>  
                    <p className="text-black font-mono text-[20px] leading-normal mt-[20px]"> Turning coffee into code </p> 
                </div>
                <div className=" ml-[15%] mt-[5%]">
                    {/* <img src="https://github.com/Archie138/Portfolio/blob/main/my-portfolio/public/images/ak_img.png?raw=true" className="rounded-full shadow-lg z-1 h-15 w-15 md:w-60 md:h-60" alt="Dev image"></img> */}
                    <Image src="https://github.com/Archie138/Portfolio/blob/main/my-portfolio/public/images/ak_img.png?raw=true" height="240" width="216" />
                    
                </div> 
                
            </div>
        </>
    )
}


