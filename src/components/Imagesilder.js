import React, { useState, useEffect, useRef } from "react";
import Iuc1 from "./Assets/Iuc-1.png"
import Iuc2 from "./Assets/Iuc-2.png"
import Iuc3 from "./Assets/Iuc-3.png"


const featuredProducts = [
    Iuc1,
    Iuc2,
    Iuc3

]
let count = 0;
let slideInterval;

function Imagesilder() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 5000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={slideRef} className="w-auto select-none ">
            <div className="aspect-w-16 aspect-h-9">
                <img src={featuredProducts[currentIndex]} alt="" />
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-50 transition"
                    onClick={handleOnPrevClick}
                >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-50 transition"
                    onClick={handleOnNextClick}
                >
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default Imagesilder;