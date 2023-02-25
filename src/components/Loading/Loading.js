import React, {useEffect} from "react";
import './Loading.css';


const Loading = () => {
    useEffect(() => {

        setTimeout(() => {

            document.querySelector('.cloud1Loading').classList.add("active");
            document.querySelector('.cloud2Loading').classList.add("active");
            document.querySelector('.cloud3Loading').classList.add("active");
            document.querySelector('.cloud4Loading').classList.add("active");
            document.querySelector('.cloud5Loading').classList.add("active");
            document.querySelector('.cloud6Loading').classList.add("active");
            document.querySelector('.cloud7Loading').classList.add("active");
            document.querySelector('.cloud8Loading').classList.add("active");
            document.querySelector('.cloud9Loading').classList.add("active");
            document.querySelector('.cloud10Loading').classList.add("active");

            document.getElementById("mapContainer").style.opacity = 1;
        }, 50);
    }, []);


    return (
        <>
            <div className="cloud1Loading"></div>
            <div className="cloud2Loading"></div>
            <div className="cloud3Loading"></div>
            <div className="cloud4Loading"></div>
            <div className="cloud5Loading"></div>
            <div className="cloud6Loading"></div>
            <div className="cloud7Loading"></div>
            <div className="cloud8Loading"></div>
            <div className="cloud9Loading"></div>
            <div className="cloud10Loading"></div>
        </>
    );
};

export default Loading;