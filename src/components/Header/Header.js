import React, {useEffect, useRef, useState} from 'react';
import './Header.css';
import winterfellHeader from "../../img/headers/winterfellHeader.jpg";
import kingslandingHeader from "../../img/headers/kingslandingHeader.webp";
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import $ from "jquery";
import AOS from 'aos';
import 'aos/dist/aos.css';
import kingslanding from "../../pages/Kingslanding";
import Headline from "../Headline/Headline";
import { TweenLite, Linear, Back, Power1, gsap } from 'gsap';
import { CSSPlugin } from "gsap/CSSPlugin";


const headers = {
    winterfellHeader,
    kingslandingHeader,
};
function Header(props) {


    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    const headerImg = headers[props.header];


    useEffect(() => {
        AOS.init();

    }, []);

    useEffect(() => {

        document.getElementById("lineTopHeadline").style.maxHeight = "1000px";

        setTimeout(function () {
            document.getElementById("lineUnderHeadline").style.maxHeight = "1000px";
        }, 1050);

        setTimeout(function () {
            document.getElementById("lineTopHeadlineContainer").style.display = "flex";
            document.getElementById("lineTopHeadlineContainer").style.alignItems = "end";
        }, 1300);

        setTimeout(function () {
            document.getElementById("lineTopHeadline").style.maxHeight = "0";
        }, 1170);

    }, []);

    useEffect(() => {
        window.addEventListener('scroll', chk_scroll);
        window.addEventListener('scroll', headerOpacity);

        return () => {
            window.removeEventListener('scroll', chk_scroll);
            window.removeEventListener('scroll', headerOpacity);
        }
    }, []);


    useEffect(() => {
        function positionCircle(e) {
            setCirclePosition({ x: e.clientX, y: e.clientY });
            console.log("X: "+ e.clientX)
            console.log("Y: "+ e.clientY)

            let bodyX = e.clientX / 25;
            let bodyY = e.clientY / 25;

            document.body.style.backgroundPositionX = `${bodyX}px`;
            document.body.style.backgroundPositionY = `${bodyY}px`;
        }

        document.addEventListener('mousemove', positionCircle);



        return () => {
            document.removeEventListener('mousemove', positionCircle);
        };
    }, []);


    function chk_scroll(e) {
        const elem = e.currentTarget;
        const scrollTop = elem.scrollY;
        const scale = scrollTop / 2000 + 1;
        document.getElementById('headerIMG').style.transform = `scale(${scale})`;
    }

    function headerOpacity() {
        const circle = document.getElementById('circle');
        const divs = document.getElementById('headerIMG');
        const line = document.getElementById('lineUnderHeadline');
        const limit = 600;
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (st <= limit) {
            divs.style.opacity = 1 - st / limit;
            line.style.maxHeight = `${limit / 2 - st}px`;
            circle.style.opacity = st / limit;
        }

        if (st > 600) {
            divs.style.opacity = 0;
            circle.style.opacity = 1;
        }
    }

    return (
        <>
            <div
                id="circle"
                style={{ position: 'fixed', left: circlePosition.x, top: circlePosition.y }}
            ></div>
            <section id="parallax" className="parallaxContainer">
            <div id="snow" className="snowLayout"></div>
            <div>
                <div className="position-relative" style={{ height: '100vh', width: '100vw' }}>
                    <img id="headerIMG" className="headerIMG" src={headerImg} alt="header" />
                    <div className="textContainer">
                        <div className="customContainer">
                            <div className="infoBox">
                                <div className=" lineContainer">
                                    <div id="lineTopHeadlineContainer" className="lineTopHeadlineContainer">
                                        <div id="lineTopHeadline" className="col-lg-6 lineHeadline"></div>
                                    </div>
                                </div>
                                <div id="headline" className="headline">
                                    <Headline headline={props.title} />
                                </div>
                                <div className="lineContainer">
                                    <div className="lineUnderHeadlineContainer">
                                        <div id="lineUnderHeadline" className="col-lg-6 lineHeadline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="parallax_cover" className="parallax__cover"></div>
                    </div>
                </div>
            </div>
        </section>

        </>

    );
}

export default Header;
