import React from "react";

function SecondsCounter(props) {
    const formatTime = (time) => {
        const paddedTime = String(time).padStart(6, "0");
        return paddedTime.split("");
    };

    const digits = formatTime(props.seconds);

    return (
        <div className="seconds-counter d-flex bg-black justify-content-center align-items-center">
            <div className="digit bg-dark text-white px-3 py-2 mx-2"><i class="fa-sharp fa-regular fa-clock"></i></div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[0]}</div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[1]}</div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[2]}</div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[3]}</div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[4]}</div>
            <div className="digit bg-dark text-white px-3 py-2 mx-2">{digits[5]}</div>
        </div>
    );
}

export default SecondsCounter;