import React, {useEffect} from "react";

function DemoSlider() {
    return (
        <div className={"relative"}>
            <div
                className={"absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide"}>Hello
            </div>
            <div
                className={"absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-1 slide"}>There
            </div>
        </div>
    );
}

export default DemoSlider;
