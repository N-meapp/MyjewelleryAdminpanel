import { useState } from "react"

export default function CategoryTab({ image, isSelected, heading, setSelectedCategory, homeCate, settselectedCategory }) {
    return (
        <>
            {isSelected ?

                <div className="md:w-[234.06px] w-[170.06px]  h-[242.93px] relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <button className="bolkit md:text-[12px] text-[6px]">Explore now</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                    </div>
                    <p className="text-[24px] text-[#ffffff] absolute top-6 left-1/2 -translate-x-1/2 text-center bolkit">
                        {heading}
                    </p>

                </div>
                :

                <div
                    onClick={() => setSelectedCategory(heading)}
                    className={`
    ${settselectedCategory === heading ? 'scale-110' : 'hover:scale-110'}
    md:w-[234.06px] w-[90px]  
    md:h-[206.86px] h-[110.86px] 
    relative 
    transition-transform duration-500 ease-in-out 
    cursor-pointer 
    ${homeCate}
  `}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                    <div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <h1 className="bolkit md:text-[12px] text-[8px]">Explore now</h1>
                        <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-full h-full"
                            >
                                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                            </svg>
                        </div>

                    </div>
                    <p className="md:text-[24px] text-[12px] text-[#ffffff] absolute top-6 left-1/2 -translate-x-1/2 text-center bolkit">
                        {heading}
                    </p>

                </div>
            }

        </>
    )
}