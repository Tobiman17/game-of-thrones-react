import React, {useEffect} from "react";
import './Loading.css';

const Loading = () => {
    useEffect(() => {
        const clouds = document.querySelectorAll(".cloudLoading");
        const timeout = setTimeout(() => {
            clouds.forEach((cloud) => {
                cloud.classList.add("active");
            });
            document.getElementById("mapContainer").style.opacity = 1;

        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="cloud1Loading cloudLoading" />
            <div className="cloud2Loading cloudLoading" />
            <div className="cloud3Loading cloudLoading" />
            <div className="cloud4Loading cloudLoading" />
            <div className="cloud5Loading cloudLoading" />
            <div className="cloud6Loading cloudLoading" />
            <div className="cloud7Loading cloudLoading" />
            <div className="cloud8Loading cloudLoading" />
            <div className="cloud9Loading cloudLoading" />
            <div className="cloud10Loading cloudLoading" />
        </>
    );
};

export default Loading;