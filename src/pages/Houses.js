import React, {useEffect} from "react";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import LightCursor from "../components/LightingCursor/LightCursor";
import Stark from "../img/stark/stark.png";
import Targayren from "../img/targaryen/targaryenLogo.png";
import Lannister from "../img/lannister/lannisterLogo.svg";
import Smoke from "../components/Smoke/Smoke";
import Sparks from "../components/Sparks/Sparks";
import {Swiper, SwiperSlide} from "swiper/react";
import Daenerys from "../img/targaryen/dany.webp";
import {EffectCoverflow, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Eddard from "../img/stark/eddard.png";
import Catlyn from "../img/stark/catlyn.png";
import Rob from "../img/stark/rob.png";
import Jon from "../img/stark/jon.png";
import Sansa from "../img/stark/sansa.png";
import Arya from "../img/stark/arya.png";
import Bran from "../img/stark/bran.png";
import Rickon from "../img/stark/rickon.png";


const Orte = () => {

    return (
        <>
            <BackBTN/>
            <Menu/>
            <Smoke/>
            <Sparks/>
            <div className="container customContainerList housesContainer">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 25,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    centeredSlides={true}
                    speed={1000}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper housesSwiper"
                >

                    <SwiperSlide>
                        <a className="figurenContainer" href="/stark">
                            <img className="houseLogoHousePage" src={Stark} alt="Stark"/>
                        </a>
                        <div className="figurenName">
                            <div className="py-3 figureHeadline">House Stark</div>
                            <a href="stark" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                            </a>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="figurenContainer" href="/Lannister">
                            <img className="houseLogoHousePage" src={Lannister} alt="Lannister"/>
                        </a>
                        <div className="figurenName">
                            <div className="py-3 figureHeadline">House Lannister</div>
                            <a href="Lannister" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="figurenContainer" href="/targaryen">
                            <img className="houseLogoHousePage" src={Targayren} alt="Targayren"/>
                        </a>
                        <div className="figurenName">
                            <div className="py-3 figureHeadline">House Targaryen</div>
                            <a href="targaryen" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Orte;