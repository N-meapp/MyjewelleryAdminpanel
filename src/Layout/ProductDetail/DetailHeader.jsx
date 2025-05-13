import React, { useEffect, useState, useRef } from 'react';
import Modal from '../../Components/Modal/Modal'
import VirtualTryOn from '../../Components/AR3DModel/VirtualTryOn';
import JewelryTryOn from '../../Components/AR3DModel/VirtualTryOn';
import MindARComponent from '../../Components/AR3DModel/VirtualTryOn';

const DetailHeader = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showTryItOn, setShowTryItOn] = useState(false);

    const [isModalTryitOnOpen, setModalTryitOnOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowTryItOn(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const imgRef = useRef(null);

    // ✅ All images in a single array
    const images = [
        "/public/assets/Images/ProductDetails/gallery/g1.png",
        "/public/assets/Images/ProductDetails/gallery/g2.png",
        "/public/assets/Images/ProductDetails/gallery/g3.png",
        "/public/assets/Images/ProductDetails/gallery/g4.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showGlass, setShowGlass] = useState(false);
    const [glassPos, setGlassPos] = useState({ x: 0, y: 0 });
    const zoom = 2;
    const glassSize = 200;

    const handleMouseMove = (e) => {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            setShowGlass(false);
            return;
        }

        setShowGlass(true);
        setGlassPos({ x, y });
    };

    const handleMouseLeave = () => setShowGlass(false);
    return (
        <>
            <div className='w-full px-[100px] py-[50px]'>

                <div className='bg-[#ffffff] rounded-[16px] px-[55px] py-[30px] ' style={{ 'box-shadow': '4px 0px 50px 0px rgba(0, 0, 0, 0.1)' }}>
                    <div className='grid grid-cols-12 gap-1 w-full'>
                        <div className='col-span-12 md:col-span-4 '>
                            <div className='border-2 border-[#ccc4b8] rounded-[20px] relative'>
                                <img className='w-full h-[330px] object-cover rounded-[20px]' src='/public/assets/Images/ProductDetails/pr1.png' />
                                <div className="absolute bottom-2 right-2 z-50">

                                    <div className="relative w-[140px] h-[42px]">
                                        {/* View Similar Button */}
                                        <button
                                            onClick={() => {
                                                setModalOpen(true);
                                                setShowTryItOn(false);
                                            }}
                                            className={`absolute inset-0 w-full h-full bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow transition-all duration-500 ease-in-out
                                           ${!showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256">
                                                <path fill="#56433d" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36" />
                                            </svg>
                                            <span className="ml-2">View similar</span>
                                        </button>

                                        {/* Try it on Button */}
                                        <button
                                            onClick={() => setModalTryitOnOpen(true)}
                                            className={`absolute inset-0 w-full h-full bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow transition-all duration-500 ease-in-out
                                        ${showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                                                <g fill="none" stroke="#56433d" stroke-width="1.5">
                                                    <circle cx="12" cy="13" r="3" />
                                                    <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" />
                                                    <path stroke-linecap="round" d="M19 10h-1" />
                                                </g>
                                            </svg>
                                            <span className="ml-2">Try it on</span>
                                        </button>
                                    </div>

                                    {/* <button
                                    className="relative overflow-hidden w-[140px] h-[42px] bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow"
                                >
                                    <div
                                       onClick={() => setModalOpen(true)}
                                        className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ease-in
                                        ${showTryItOn ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256"><path fill="#56433d" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36" /></svg>

                                        <span>View similar</span>
                                    </div>
                                    
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ease-in-out
                                        ${showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" stroke="#56433d" stroke-width="1.5"><circle cx="12" cy="13" r="3" /><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" /><path stroke-linecap="round" d="M19 10h-1" /></g></svg>

                                        <span>Try it on</span>
                                    </div>
                                </button> */}
                                </div>

                                {/* <button type="button" class="absolute text-[13px] font-[550] bottom-1 right-1 text-[#56433d] rounded-[10px] bg-white border border-[#ccc4b8] focus:outline-none hover:bg-gray-100 px-3 py-2 me-2 mb-2 ">
                                <div className='flex gap-2'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256"><path fill="#56433d" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36" /></svg>
                                    </span>
                                    View similar
                                </div>
                            </button>
                            <button type="button" class="absolute text-[13px] font-[550] bottom-1 right-1 text-[#56433d] rounded-[10px] bg-white border border-[#ccc4b8] focus:outline-none hover:bg-gray-100 px-3 py-2 me-2 mb-2 ">
                                <div className='flex gap-2'>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" stroke="#56433d" stroke-width="1.5"><circle cx="12" cy="13" r="3"/><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"/><path stroke-linecap="round" d="M19 10h-1"/></g></svg>
                                    </span>
                                       Try it on
                                </div>
                            </button> */}
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-8 px-[30px] py-[40px] relative'>

                            <div className=''>
                                <p className='text-[32px] text-[#474141] alice'>Luxuriant Diamond Pendant</p>
                                <svg className=' absolute top-2 right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#474141" fill-rule="evenodd" d="M14.25 5.5a3.25 3.25 0 1 1 .833 2.173l-2.717 1.482l-3.04 1.737a3.25 3.25 0 0 1 .31 2.464l5.447 2.971a3.25 3.25 0 1 1-.719 1.316l-5.447-2.97a3.25 3.25 0 1 1-.652-4.902l3.37-1.926l2.729-1.489a3.3 3.3 0 0 1-.114-.856m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-11 7a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m9.25 7.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd" /></svg>
                                <div className='flex gap-2'>
                                    <div className='flex'>
                                        <img className='w-[40px] h-[40px]' src="/public/assets/Images/ProductDetails/gold.gif" alt="Computer man" />
                                        <p className='text-[16px] text-[#474141] poppins mt-2'>18 Karat</p>
                                    </div>
                                    <div className='flex'>
                                        <img className='w-[40px] h-[40px]' src="/public/assets/Images/ProductDetails/diamond.gif" alt="Computer man" />
                                        <p className='text-[16px] text-[#474141] poppins mt-2'>0.226 ct</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 32 32"><path fill="#474141" d="M5 4a1 1 0 0 0 0 2h1.557l-3.491 9.143A1 1 0 0 0 3 15.5C3 18.077 4.923 20 7.5 20s4.5-1.923 4.5-4.5a1 1 0 0 0-.066-.357L8.445 6H15v16H9a3 3 0 1 0 0 6h14a3 3 0 0 0 0-6h-6V6h6.434l-3.372 9.154A1 1 0 0 0 20 15.5c0 2.577 1.923 4.5 4.5 4.5s4.5-1.923 4.5-4.5a1 1 0 0 0-.062-.346L25.566 6H27a1 1 0 1 0 0-2zm2.5 5.137L9.548 14.5H5.452zM22.434 14.5L24.5 8.893l2.066 5.607z" /></svg>
                                    <p className='popinse font-[300] text-[#474141] text-[16px]'>weight: &nbsp; <span className='font-[600] text-[19px]'>0.902 g</span> </p>
                                </div>



                                <div className='flex justify-between w-full mt-[100px]'>
                                    <div>
                                        <div className='flex gap-2'>
                                            <p className='inter text-[32px] font-[600] text-[#474141]'>₹41326.00</p>
                                            <span className='mt-3 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 15 15"><path fill="none" stroke="#474141" stroke-linecap="square" d="m14 5l-6.5 7L1 5" stroke-width="1" /></svg></span>
                                        </div>

                                        <p className='inter text-[12px] text-[#a29f9f]'>Incl. taxes and charges </p>
                                    </div>
                                    <div>
                                        <button type="button" class="text-white flex gap-2 bg-[#56433d] hover:bg-[#795f57] font-medium rounded-lg text-sm px-24 py-2.5 me-2 mb-2">
                                            <img className='w-[20px] h-[20px]' src='/public/assets/Images/ProductDetails/w1.png' />
                                            Enquire
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                mainModalClass={"relative p-4 w-full max-w-7xl max-h-full"}
                modalWrapDiv={"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                onClose={() =>
                    setModalOpen(false)}
                content={(
                    <div>
                        <div className="flex flex-col items-center gap-4 py-7">
                            <div
                                className="relative w-[400px] h-[350px] object-cover overflow-hidden border border-[#ccc4b8] rounded-[20px]"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    ref={imgRef}
                                    src={images[currentIndex]}
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                    alt="Zoomable"
                                />

                                {showGlass && (
                                    <div
                                        className="absolute pointer-events-none rounded-full border-2 border-white shadow-md"
                                        style={{
                                            width: `${glassSize}px`,
                                            height: `${glassSize}px`,
                                            top: `${glassPos.y - glassSize / 2}px`,
                                            left: `${glassPos.x - glassSize / 2}px`,
                                            backgroundImage: `url(${images[currentIndex]})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: `${imgRef.current.offsetWidth * zoom}px ${imgRef.current.offsetHeight * zoom}px`,
                                            backgroundPosition: `-${glassPos.x * zoom - glassSize / 2}px -${glassPos.y * zoom - glassSize / 2}px`,
                                            zIndex: 10,
                                        }}
                                    />
                                )}
                            </div>

                            <div className="flex gap-3 mt-5">
                                {images.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`thumb-${index}`}
                                        className={`w-28 h-24 object-cover cursor-pointer border rounded-[10px] ${index === currentIndex ? "border-[#5f3f36] border-2" : "border-gray-300"
                                            }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            />


         {/* try it on virtual modal */}

            <Modal
                isOpen={isModalTryitOnOpen}
                mainModalClass={"relative p-4 w-full max-w-7xl max-h-full"}
                modalWrapDiv={"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"}
                onClose={() =>
                    setModalTryitOnOpen(false)}
                content={(
                    <div>
                       <MindARComponent setModalTryitOnOpen={() => setModalTryitOnOpen(false)} />
                    </div>
                )}
            />

        </>
    )
}

export default DetailHeader