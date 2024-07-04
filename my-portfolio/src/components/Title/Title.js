import React from "react";

export const Title = () => {
    return (
        <>
            <div className="mt-[6%] mb-[10%]">
            
                <p className="mb-[2%] text-[25px] ml-[5%] font-bold"> ABOUT </p>

                <div className="flex justify-center space-x-4 pt-[7%] mb-[5%] mt-[2%]"> 
                
                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] hover:shadow-inner">
                        <p className="font-bold"> Frontend Developer </p>
                        <p> As a frontend developer, I specialize in creating engaging and responsive user interfaces that are both aesthetically pleasing and highly functional. </p>
                    </div>

                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] hover:shadow-inner">
                        <p className="font-bold"> AI/ML Engineer </p>
                        <p> I have a strong foundation in artificial intelligence and machine learning, enabling me to develop intelligent systems that can learn and adapt as required. </p>
                    </div>
                    
                </div>                                
            </div>
        </>
    )
}
