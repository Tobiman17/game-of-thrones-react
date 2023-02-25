import React, {useEffect, useRef, useState} from "react";
import MapIMG from "../../img/mapV2.jpg";
import './map.css';
import WinterfellIMG from "../../img/popUp/Winterfell.jpg";
import KingslandingIMG from "../../img/popUp/Kingslanding.jpg";
import Loading from "../../components/Loading/Loading";
import RingCursor from "../../components/RingCursor/RingCursor";


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

    const imageWrapperRef = useRef(null);

    const [isDotHovered, setIsDotHovered] = useState(false);

    const handleDotHover = () => {
        setIsDotHovered(true);
    };

    const handleDotLeave = () => {
        setIsDotHovered(false);
    };


    const popUpImages = {
        WinterfellIMG,
        KingslandingIMG,
    };

    const handlePopup = (e) => {
        const target = e.target;
        const popup = target.getAttribute('data-popup');
        const image = target.getAttribute('data-image');

        setPopup({popup, image});
    };


    const handleStartDragging = (e) => {
        console.log("drag / " + draggable)
        if (draggable) {
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

    useEffect(() => {
        document.body.classList.add("dark-bg");
    }, []);

    useEffect(() => {
        document.getElementById("map").style.transform = `scale(${zoomLevel})`;
        document.getElementById("mapContainer").style.position = `absolute`;

        setTimeout(() => {
            document.getElementById("mapContainer").style.position = `fixed`;
        }, 550);

        changedots(zoomLevel);
    }, [zoomLevel]);

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
                span.innerHTML = "&bull;";

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
                // div.appendChild(lable);
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

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    };

    return (
        <div>
            {isLoading && (
                <Loading />
            )}
            <div
                id="mapContainer"
                className="mapContainer"
            >
                <div
                    id="image-wrapper"
                    className="imageWrapper"
                    ref={imageWrapperRef}
                    style={{ position: "relative" }}
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
                            data-popup="Hauptstadt der Starks"
                            alt="WinterfellMap"
                            noHref=""
                            coords="1201,771,82"
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
                    <div id="popupContent">
                        <img id="popupIMG" className="popupImg" src="src/pages" alt="" />
                        <div id="popupHeadline" className="popupHeadline"></div>
                        <div id="popupText" className="popupText"></div>
                        <div className="popupButton">
                            <a id="popupBtn" href="src/pages">
                                Entdecken
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <RingCursor isDotHovered={isDotHovered} />

        </div>
    );
}

export default Map;