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

import Eddard from "../img/stark/eddard.png";
import Catlyn from "../img/stark/catlyn.png";
import Sansa from "../img/stark/sansa.png";
import Arya from "../img/stark/arya.png";
import Jon from "../img/stark/jon.png";
import Rickon from "../img/stark/rickon.png";
import Bran from "../img/stark/bran.png";
import Rob from "../img/stark/rob.png";



const Figuren = () => {
    const [progressStark, setProgressStark] = useState(0);
    const [progressTargaryen, setProgressTargaryen] = useState(0);

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


    return (
        <>
            <BackBTN />
            <Menu />
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
                                    <a href="/eddard">
                                    <img className="figureIMG" src={Eddard}  alt="Eddard"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="/catlyn">
                                    <img className="figureIMG" src={Catlyn}  alt="Catlyn"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="/rob">
                                    <img className="figureIMG" src={Rob}  alt="Rob"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Jon}  alt="Jon"/>
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
                                    <a href="/eddard">
                                    <img className="figureIMG" src={Eddard}  alt="Eddard"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Catlyn}  alt="Catlyn"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Rob}  alt="Rob"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="figureIMG" src={Jon}  alt="Jon"/>
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
                                    style={{ width: `${progressTargaryen}%` }}
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
