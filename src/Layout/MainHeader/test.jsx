import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/public/assets/Images/products/firefly4.png',
        '/public/assets/Images/products/firefly4.png',
        '/public/assets/Images/products/firefly4.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full max-w-md overflow-hidden mx-auto rounded-xl">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={src} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 ">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
