import React from "react";

function nextSlide() {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
}

function previousSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove('-translate-x-full');
    previousSlide.classList.add('translate-x-0');
}

function StaticSlider() {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello
            </div>
            <div
                className="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-100 transform translate-x-full slide">There
            </div>
            <div
                className="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">Booya!
            </div>
            <button
                onClick={nextSlide()} className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">&#x276F;</button>
            <button
               onClick={previousSlide()} className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">&#x276E;</button>
        </div>
    );

}

export default StaticSlider;
