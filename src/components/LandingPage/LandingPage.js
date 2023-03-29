import React, {useEffect, useState} from "react";
import './LandingPage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ThroneIMG from "../../img/throne.jpeg";


const LandingPage = () => {

    const [zoomLevel, setZoomLevel] = useState(1);


    const [backgroundX, setBackgroundX] = useState(0);
    const [backgroundY, setBackgroundY] = useState(0);

    const [scrollable, setScrollable] = useState(true);
    const [scrollLevel, setScrollLevel] = useState(1);

    const [opacityMap, setOpacityMap] = useState(0);
    const [opacityHouses, setOpacityHouses] = useState(0);
    const [opacityFiguren, setOpacityFiguren] = useState(0);

    const [displayMap, setDisplayMap] = useState("none");
    const [displayHouses, setDisplayHouses] = useState("none");
    const [displayFiguren, setDisplayFiguren] = useState("none");

    const transformStyle = `scale(${zoomLevel})`;
    const position = `${backgroundX}px ${backgroundY}px`;

    const [percent, setPercent] = useState(0);
    const light = `brightness(${percent}%)`;

    useEffect(() => {
        setPercent(70);
    }, []);

    const handleWheel = (event) => {
        if (scrollable) {
            console.log(scrollLevel)
            if (scrollLevel === 1) {
                if (event.deltaY > 0) {
                    setZoomLevel(1);
                    setScrollLevel(1);
                    setBackgroundY(0);
                    setScrollable(false);
                    setOpacityMap(0);
                    setDisplayMap("none");
                    setTimeout(() => setScrollable(true), 1250);
                }
                if (event.deltaY < 0) {
                    setZoomLevel(2);
                    setScrollLevel(2);
                    setBackgroundY(180);
                    setScrollable(false);
                    setDisplayMap("flex");
                    setTimeout(() => setOpacityMap(1), 800);
                    setTimeout(() => setScrollable(true), 1250);
                }
            } else if (scrollLevel === 2) {
                if (event.deltaY > 0) {
                    setBackgroundX(0);
                    setBackgroundY(180);
                    setScrollable(false);
                    setScrollLevel(1);
                    setDisplayMap("flex");
                    setDisplayHouses("none");
                    setTimeout(() => setOpacityMap(1), 800);
                    setOpacityHouses(0);
                    setTimeout(() => setScrollable(true), 1250);
                }
                if (event.deltaY < 0) {
                    setBackgroundX(300);
                    setOpacityMap(0);
                    setDisplayMap("none");
                    setBackgroundY(-50);
                    setScrollable(false);
                    setScrollLevel(3);
                    setDisplayHouses("flex");
                    setTimeout(() => setOpacityHouses(1), 800);
                    setTimeout(() => setScrollable(true), 1250);
                }
            }else if (scrollLevel === 3) {
                if (event.deltaY > 0) {
                    setBackgroundX(300);
                    setBackgroundY(-50);
                    setScrollable(false);
                    setScrollLevel(2);
                    setOpacityFiguren(0);
                    setDisplayHouses("flex");
                    setDisplayFiguren("none");
                    setTimeout(() => setOpacityHouses(1), 800);
                    setTimeout(() => setScrollable(true), 1250);
                }
                if (event.deltaY < 0) {
                    setBackgroundX(-300);
                    setBackgroundY(-50);
                    setScrollable(false);
                    setScrollLevel(4);
                    setOpacityHouses(0);
                    setDisplayHouses("none");
                    setDisplayFiguren("flex");
                    setTimeout(() => setOpacityFiguren(1), 800);
                    setTimeout(() => setScrollable(true), 1250);
                }
            }else if (scrollLevel === 4) {
                if (event.deltaY > 0) {
                    setBackgroundX(-300);
                    setBackgroundY(-50);
                    setScrollable(false);
                    setScrollLevel(3);
                    setDisplayFiguren("flex");
                    setTimeout(() => setOpacityFiguren(1), 800);
                    setTimeout(() => setScrollable(true), 1250);
                }
                if (event.deltaY < 0) {
                    setBackgroundX(0);
                    setBackgroundY(200);
                    setScrollable(false);
                    setOpacityFiguren(0);
                    setDisplayFiguren("none");
                    setTimeout(() => setScrollable(true), 1250);
                }
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center landingPageContainer">
            <img
                id="throne"
                src={ThroneIMG}
                onWheel={handleWheel}
                style={{transform: transformStyle, objectPosition: position, filter: light}}
             alt="alt"/>

            <a href="/map" className="popUpLandingPage" style={{opacity: opacityMap, display: displayMap }}>
            <div className="">
                <div className="popUpLandingPageText">
                    Karte
                </div>
            </div>
            </a>
            <a href="/houses" className="popUpLandingPage" style={{opacity: opacityHouses, display: displayHouses}}>
            <div className="">
                <div className="popUpLandingPageText">
                    Häuser
                </div>
            </div>
            </a>
            <a href="/figuren" className="popUpLandingPage" style={{opacity: opacityFiguren, display: displayFiguren}}>
            <div className="">
                <div className="popUpLandingPageText">
                    Figuren
                </div>
            </div>
            </a>
        </div>
    )
}

export default LandingPage;