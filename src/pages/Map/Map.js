import React, {useEffect, useRef, useState} from "react";
import MapIMG from "../../img/mapV2.jpg";
import './map.css';
import Loading from "../../components/Loading/Loading";
import RingCursor from "../../components/RingCursor/RingCursor";
import BackBTN from "../../components/BackBTN/BackBTN";
import Menu from "../../components/Menu/Menu";
import ReactDOM from 'react-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import WinterfellIMG from "../../img/popUp/Winterfell.jpg";
import KingslandingIMG from "../../img/popUp/Kingslanding.jpg";
import CasterlyRockIMG from "../../img/popUp/CasterlyRock.jpeg";
import CastleBlackIMG from "../../img/popUp/CastleBlack.webp";
import DragonStoneIMG from "../../img/popUp/dragonStone.jpeg";

const Map = () => {
    const [popup, setPopup] = useState(null);

    const [zoomLevel, setZoomLevel] = useState(0.61);
    const [scrollable, setScrollable] = useState(true);
    const [mouseDown, setMouseDown] = useState(false);
    const [draggable, setDraggable] = useState(true);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [isDotHovered, setIsDotHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isDragged, setIsDragged] = useState(false);

    const imageWrapperRef = useRef(null);


    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    };

    const handleDotHover = () => {
        setIsDotHovered(true);
    };

    const handleDotLeave = () => {
        setIsDotHovered(false);
    };


    const popUpImages = {
        WinterfellIMG,
        KingslandingIMG,
        CasterlyRockIMG,
        CastleBlackIMG,
        DragonStoneIMG,
    };

    const handlePopup = (e) => {
        const target = e.target;
        const popup = target.getAttribute('data-popup');
        const image = target.getAttribute('data-image');

        setPopup({popup, image});
    };


    const handleStartDragging = (e) => {
        if (draggable) {
            setIsDragged(true);

            const popupContainer = document.getElementById("popupContainer");
            const popupContent = document.getElementById("popupContent");
            const popupHeadline = document.getElementById("popupHeadline");

            if (!e.target.getAttribute("data-title")) {
                popupContent.style.opacity = "0";

                setTimeout(() => {
                    if (popupHeadline.innerHTML) {
                        let uniqueClass = popupHeadline.innerHTML + "DOT";
                        const dot = document.getElementById(uniqueClass);
                        dot.classList.remove("active");
                    }
                    popupContainer.style.maxHeight = "0";
                }, 220);

                setTimeout(() => {
                    popupHeadline.innerHTML = "";
                }, 320);
            }

            setMouseDown(true);
            setStartX(e.pageX - e.target.offsetLeft);
            setStartY(e.pageY - e.target.offsetTop);

        }
    };

    const handleWheel = (event) => {
        if (scrollable) {
            const slider = document.querySelector('.mapContainer');

            if (event.deltaY < 0) {
                setZoomLevel(zoomLevel + 0.25);
            }

            if (event.deltaY > 0 && zoomLevel >= 0.62) {
                setZoomLevel(zoomLevel - 0.25);
            }


            setScrollable(false);
            setDraggable(false);

            setTimeout(() => setScrollable(true), 550);
            setTimeout(() => setDraggable(true), 550);
        }
    };

    useEffect(() => {
        document.body.classList.add("dark-bg");
        document.getElementById("menuBTN").addEventListener("mouseover", handleDotHover);
        document.getElementById("menuBTN").addEventListener("mouseleave", handleDotLeave);
        document.getElementById("menuContainer").addEventListener("mouseover", handleDotHover);
        document.getElementById("menuContainer").addEventListener("mouseleave", handleDotLeave);

    }, []);


    useEffect(() => {
        if (isDragged) {
            document.getElementById("dragCursor").classList.add("activeDrag")
        }else{
            document.getElementById("dragCursor").classList.remove("activeDrag")
        }
    }, [isDragged]);

    useEffect(() => {
        document.getElementById("map").style.transform = `scale(${zoomLevel})`;
        document.getElementById("mapContainer").style.position = `absolute`;

        setTimeout(() => {
            document.getElementById("mapContainer").style.position = `fixed`;
        }, 550);

        changedots(zoomLevel);
    }, [zoomLevel]);

    useEffect(() => {
        if (draggable) {
            const slider = document.querySelector('.mapContainer');
            const handleMouseMove = (e) => {
                e.preventDefault();
                if (!mouseDown) {
                    return;
                }
                const x = e.pageX - slider.offsetLeft;
                const y = e.pageY - slider.offsetTop;
                const scrollX = x - startX;
                const scrollY = y - startY;


                slider.scrollLeft = scrollLeft - scrollX;
                slider.scrollTop = scrollTop - scrollY;

            };
            const handleStopDragging = (event) => {
                setIsDragged(false);
                setScrollLeft(slider.scrollLeft);
                setScrollTop(slider.scrollTop);

                setMouseDown(false);
            };

            slider.addEventListener('mousemove', handleMouseMove, false);
            slider.addEventListener('mousedown', handleStartDragging, false);
            slider.addEventListener('mouseup', handleStopDragging, false);
            slider.addEventListener('mouseleave', handleStopDragging, false);

            return () => {
                slider.removeEventListener('mousemove', handleMouseMove, false);
                slider.removeEventListener('mousedown', handleStartDragging, false);
                slider.removeEventListener('mouseup', handleStopDragging, false);
                slider.removeEventListener('mouseleave', handleStopDragging, false);
            };
        }
    }, [mouseDown, startX, startY, scrollLeft, scrollTop, draggable]);


    useEffect(() => {
        const areas = imageWrapperRef.current.getElementsByTagName("area");

        for (const element of areas) {
            if (element.getAttribute("name") !== "placeHolder") {
                let area = element;


                let div = document.createElement("div");
                div.classList.add("dot");
                div.id = area.getAttribute("name") + "DOT";

                let span = document.createElement("span");
                let icon = <FontAwesomeIcon className="dotIcon" icon={faCircle} />;
                ReactDOM.render(icon, span);



                let lable = document.createElement("span");
                lable.innerHTML = area.getAttribute("name");
                lable.classList.add("lable")



                div.setAttribute('data-title', area.getAttribute("name"));
                div.setAttribute('data-text', area.getAttribute("data-popup"));

                let coords = area.coords.split(",");
                let leftCord = parseInt(coords[0]) + imageWrapperRef.current.offsetLeft - 5;
                let topCord = parseInt(coords[1]) + imageWrapperRef.current.offsetTop - 5;

                div.setAttribute('data-coords', coords.join(','));


                leftCord = leftCord * zoomLevel;
                topCord = topCord * zoomLevel;

                div.style.left = leftCord + "px";
                div.style.top = topCord + "px";

                document.querySelector(".dotContainer").appendChild(div);
                div.appendChild(span);
            }
            addDotFunction();
        }
    }, []);

    function changedots(zoomLevel) {
        let dots = document.getElementsByClassName("dot");

        for (const div of dots) {
            let coords = div.getAttribute("data-coords").split(",");
            let leftCord = parseInt(coords[0]) + document.getElementById("image-wrapper").offsetLeft - 5;
            let topCord = parseInt(coords[1]) + document.getElementById("image-wrapper").offsetTop - 5;

            leftCord = leftCord * zoomLevel;
            topCord = topCord * zoomLevel;

            div.style.left = leftCord + "px";
            div.style.top = topCord + "px";
        }

        addDotFunction();
    }

    function addDotFunction() {
        const places = document.querySelectorAll(".dot");

        const popupContainer = document.getElementById("popupContainer");
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popupContent");
        const popupHeadline = document.getElementById("popupHeadline");
        const popupImg = document.getElementById("popupIMG");
        const popupBtn = document.getElementById("popupBtn");
        const popupText = document.getElementById("popupText");

        places.forEach((place) => {
            place.addEventListener("mouseenter", (event) => {
                handleDotHover();
            });
            place.addEventListener("mouseleave", (event) => {
                handleDotLeave();
            });
            place.addEventListener("click", (event) => {
                const area = event.target;
                if (area.getAttribute("data-title") !== popupHeadline.innerHTML) {
                    const path = area.getAttribute("data-title") + "IMG";
                    const headerImg = popUpImages[path];
                    if (popupContainer.style.maxHeight === "250px") {
                        popupContent.style.opacity = "0";

                        let name = area.getAttribute("data-title");
                        let uniqueClass = name + "DOT";
                        const dot = document.getElementById(uniqueClass);
                        dot.classList.remove("active");

                        setTimeout(function () {
                            popupContainer.style.maxHeight = "0";
                        }, 220);

                        setTimeout(function () {

                            let pathBtn = "/" + name;
                            popupContainer.style.maxHeight = "250px";
                            popupHeadline.innerHTML = name;
                            popupImg.src = headerImg;
                            popupBtn.href = pathBtn;
                            popupText.innerHTML = area.getAttribute("data-text");
                            setTimeout(function () {
                                popupContent.style.opacity = "1";
                            }, 250);
                        }, 850);
                    } else {
                        const area = event.target;
                        let name = area.getAttribute("data-title");
                        let pathBtn = "/" + name;

                        let uniqueClass = name + "DOT";
                        const dot = document.getElementById(uniqueClass);
                        dot.classList.add("active");


                        popupContainer.style.maxHeight = "250px";
                        popupHeadline.innerHTML = name;
                        popupImg.src = headerImg;
                        popupBtn.href = pathBtn;
                        popupText.innerHTML = area.getAttribute("data-text");
                        setTimeout(function () {
                            popupContent.style.opacity = "1";
                        }, 250);
                    }
                }
            });
        });
    }


    return (
        <div>
            {isLoading && (
                <Loading/>
            )}
            <div
                id="mapContainer"
                className="mapContainer"
            >
                <Menu />
                <div
                    id="image-wrapper"
                    className="imageWrapper"
                    ref={imageWrapperRef}
                    style={{position: "relative"}}
                >
                    <img
                        id="map"
                        src={MapIMG}
                        onLoad={handleImageLoad}
                        onWheel={handleWheel}
                        useMap="src/pages#image-map"
                    />
                    <map name="image-map">
                        <area
                            id="kingslanding"
                            className="place"
                            name="Kingslanding"
                            alt="KingslandingMap"
                            data-popup="Die Hauptstadt von Westeros."
                            noHref=""
                            coords="1506,2009,50"
                            shape="circle"
                            onClick={handlePopup}
                        />
                        <area
                            id="winterfell"
                            className="place"
                            name="Winterfell"
                            data-popup="Hauptsitz der Starks. Hauptstadt des Nordens."
                            alt="WinterfellMap"
                            noHref=""
                            coords="1201,771,82"
                            shape="circle"
                            onClick={handlePopup}
                        />
                        <area
                            id="casterlyRock"
                            className="place"
                            name="CasterlyRock"
                            data-popup="Hauptsitz der Lannisters. Hauptstadts des Westens."
                            alt="CasterlyRockMap"
                            noHref=""
                            coords="740,1940,32"
                            shape="circle"
                            onClick={handlePopup}
                        />
                        <area
                            id="castleBlack"
                            className="place"
                            name="CastleBlack"
                            data-popup="Die größte bemannte Festung der Mauer. Bewacht von den Nachtwache."
                            alt="castleBlackMap"
                            noHref=""
                            coords="1423,275,30"
                            shape="circle"
                            onClick={handlePopup}
                        />
                        <area
                            id="dragonStone"
                            className="place"
                            name="DragonStone"
                            data-popup="Hauptsitz der Targaryens."
                            alt="dragonStoneMap"
                            noHref=""
                            coords="1767,1928,32"
                            shape="circle"
                            onClick={handlePopup}
                        />
                    </map>
                </div>

                <div className=" dotContainer position-relative"></div>
            </div>
            <div id="popupContainer" onMouseEnter={handleDotHover}
                 onMouseLeave={handleDotLeave}>
                <div id="popup">
                    <div  id="popupContent">
                        <img id="popupIMG" className="popupImg" src="src/pages" alt=""/>
                        <div id="popupHeadline" className="popupHeadline"></div>
                        <div id="popupText" className="popupText"></div>
                        <a href="src/pages" id="popupBtn"  className="popupButton">
                            <span >
                                Entdecken
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <RingCursor isDotHovered={isDotHovered}/>

        </div>
    );
}

export default Map;