import React, { useState } from "react";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import "./List.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Stark from "../img/stark/stark.png";
import Targayren from "../img/targaryen/targaryenLogo.png";
import Lannister from "../img/lannister/lannisterLogo.svg";

import Eddard from "../img/stark/eddard.png";
import Catlyn from "../img/stark/catlyn.png";
import Sansa from "../img/stark/sansa.png";
import Arya from "../img/stark/arya.png";
import Jon from "../img/stark/jon.png";
import Rickon from "../img/stark/rickon.png";
import Bran from "../img/stark/bran.png";
import Rob from "../img/stark/rob.png";
import Daenerys from "../img/targaryen/dany.webp";
import Tywin from "../img/lannister/tywin.webp";
import Tyrion from "../img/lannister/tyrion.jpeg";
import Cersei from "../img/lannister/cersei.webp";
import Jaime from "../img/lannister/jaime.jpeg";
import Smoke from "../components/Smoke/Smoke";
import Sparks from "../components/Sparks/Sparks";
import LightCursor from "../components/LightingCursor/LightCursor";



const Figuren = () => {
    const [progressStark, setProgressStark] = useState(0);
    const [progressTargaryen, setProgressTargaryen] = useState(0);
    const [progressLannister, setProgressLannister] = useState(0);

    const handleSlideChangeStark = (swiper) => {
        const length = swiper.slides.length -3;
        const progressStark = (swiper.activeIndex / length) * 100;
        setProgressStark(progressStark);
    };
    const handleSlideChangeTargaryen = (swiper) => {
        const length = swiper.slides.length -3;
        const progressTargaryen = (swiper.activeIndex / length) * 100;
        setProgressTargaryen(progressTargaryen);
    };
    const handleSlideChangeLannister = (swiper) => {
        const length = swiper.slides.length -3;
        const progressLannister = (swiper.activeIndex / length) * 100;
        setProgressLannister(progressLannister);
    };


    return (
        <>
            <BackBTN />
            <Menu />
            <Smoke/>
            <Sparks/>
            <div className="d-flex justify-content-center align-items-center figurenList">
                <div className="container customContainerList">
                    <div className="row listContainer ">
                        <div className="col-lg-3">
                            <img className="houseLogo" src={Stark}  alt="Stark"/>
                        </div>
                        <div className="col-lg-9">
                            <Swiper
                                slidesPerView={3}
                                centeredSlides={false}
                                spaceBetween={30}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper"
                                onSlideChange={handleSlideChangeStark}
                            >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/eddard">
                                        <img className="figureIMG" src={Eddard}  alt="Eddard"/>
                                        <div className="figurenName">Eddard Stark</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/catlyn">
                                        <img className="figureIMG" src={Catlyn}  alt="Catlyn"/>
                                        <div className="figurenName">Catlyn Stark</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/rob">
                                        <img className="figureIMG" src={Rob}  alt="Rob"/>
                                        <div className="figurenName">Rob Stark</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/jon">
                                        <img className="figureIMG" src={Jon}  alt="Jon"/>
                                        <div className="figurenName">Jon Snow</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Sansa}  alt="Sansa"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Arya}  alt="Arya"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Bran}  alt="Bran"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Rickon}  alt="Rickon"/>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination-custom">
                                <div
                                    className="swiper-pagination-custom-progress starkList"
                                    style={{ width: `${progressStark}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row listContainer ">
                        <div className="col-lg-3">
                            <img className="houseLogo" src={Targayren}  alt="Targayren"/>
                        </div>
                        <div className="col-lg-9">
                            <Swiper
                                slidesPerView={3}
                                centeredSlides={false}
                                spaceBetween={30}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper"
                                onSlideChange={handleSlideChangeTargaryen}
                            >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/daenerys">
                                    <img className="figureIMG" src={Daenerys}  alt="Daenerys"/>
                                        <div className="figurenName">Daenerys Targaryen</div>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination-custom">
                                <div
                                    className="swiper-pagination-custom-progress targaryenList"
                                    style={{ width: `${progressTargaryen}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row listContainer ">
                        <div className="col-lg-3">
                            <img className="houseLogo" src={Lannister}  alt="Lannister"/>
                        </div>
                        <div className="col-lg-9">
                            <Swiper
                                slidesPerView={3}
                                centeredSlides={false}
                                spaceBetween={30}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper"
                                onSlideChange={handleSlideChangeLannister}
                            >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/tywin">
                                    <img className="figureIMG" src={Tywin}  alt="Tywin"/>
                                        <div className="figurenName">Tywin Lannister</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/tyrion">
                                        <img className="figureIMG" src={Tyrion}  alt="Tyrion"/>
                                        <div className="figurenName">Tyrion Lannister</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/Cersei">
                                        <img className="figureIMG" src={Cersei}  alt="Cersei"/>
                                        <div className="figurenName">Cersei Lannister</div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/Jaime">
                                        <img className="figureIMG" src={Jaime}  alt="Jaime"/>
                                        <div className="figurenName">Jaime Lannister</div>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination-custom">
                                <div
                                    className="swiper-pagination-custom-progress lannisterList"
                                    style={{ width: `${progressLannister}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Figuren;
