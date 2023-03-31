import React, {useState} from "react";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import "./List.css";
import {SwiperSlide, Swiper} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Stark from "../img/stark/starkWappen.webp";
import Targayren from "../img/targaryen/targaryenLogo.png";
import Lannister from "../img/lannister/lannisterLogo.svg";
import Baratheon from "../img/baratheon/baratheon.png";

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
import Joffrey from "../img/lannister/joffrey.webp";
import Tommen from "../img/lannister/tommen.webp";
import Myrcella from "../img/lannister/myrcella.webp";
import Robert from "../img/baratheon/robert.webp";
import Smoke from "../components/Smoke/Smoke";
import Sparks from "../components/Sparks/Sparks";
import LightCursor from "../components/LightingCursor/LightCursor";
import Header from "../components/Header/Header";


const Figuren = () => {
    const [progressStark, setProgressStark] = useState(0);
    const [progressTargaryen, setProgressTargaryen] = useState(0);
    const [progressLannister, setProgressLannister] = useState(0);

    const handleSlideChangeStark = (swiper) => {
        const length = swiper.slides.length - 3;
        const progressStark = (swiper.activeIndex / length) * 100;
        setProgressStark(progressStark);
    };
    const handleSlideChangeTargaryen = (swiper) => {
        const length = swiper.slides.length - 3;
        const progressTargaryen = (swiper.activeIndex / length) * 100;
        setProgressTargaryen(progressTargaryen);
    };
    const handleSlideChangeLannister = (swiper) => {
        const length = swiper.slides.length - 3;
        const progressLannister = (swiper.activeIndex / length) * 100;
        setProgressLannister(progressLannister);
    };


    return (
        <>
            <BackBTN/>
            <Menu/>
            <Sparks/>
            <Smoke/>
            <LightCursor/>
            <Header header={"figurenHeader"} title={"Figuren"}/>
            <div className="d-flex justify-content-center align-items-center figurenList">
                <div className="container customContainerList">
                    <div className="row listContainer">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            <a className="houseLink d-flex justify-content-center align-items-center py-4"
                               href="/stark">
                                <img className="houseLogo" src={Stark} alt="Stark"/>
                            </a>
                        </div>
                        <div className="col-lg-12">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 25,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                centeredSlides={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"

                            >

                                <SwiperSlide>
                                    <a className="figurenContainer" href="/eddard">
                                        <img className="figureIMG" src={Eddard} alt="Eddard"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Eddard Stark</div>
                                        <a href="/eddard" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/catlyn">
                                        <img className="figureIMG" src={Catlyn} alt="Catlyn"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Catlyn Stark</div>
                                        <a href="/catlyn" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/rob">
                                        <img className="figureIMG" src={Rob} alt="Rob"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Rob Stark</div>
                                        <a href="/rob" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/jon">
                                        <img className="figureIMG" src={Jon} alt="Jon"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Jon Snow</div>
                                        <a href="/jon" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/sansa">
                                        <img className="figureIMG" src={Sansa} alt="Sansa"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Sansa Stark</div>
                                        <a href="/sansa" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/arya">
                                        <img className="figureIMG" src={Arya} alt="Arya"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Arya Stark</div>
                                        <a href="/arya" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/bran">
                                        <img className="figureIMG" src={Bran} alt="Bran"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Bran Stark</div>
                                        <a href="/bran" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/rickon">
                                        <img className="figureIMG" src={Rickon} alt="Rickon"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Rickon Stark</div>
                                        <a href="/rickon" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                    <div className="row listContainer ">
                        <div className="col-lg-12">
                            <a className="houseLink d-flex justify-content-center align-items-center py-4"
                               href="/targaryen">
                                <img className="houseLogo" src={Targayren} alt="Targayren"/>
                            </a>
                        </div>
                        <div className="col-lg-12">
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    slidesPerView={"auto"}
                                    coverflowEffect={{
                                        rotate: 25,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    centeredSlides={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/daenerys">
                                        <img className="figureIMG" src={Daenerys} alt="Daenerys"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Daenerys Targaryen</div>
                                        <a href="daenerys" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row listContainer">
                        <div className="col-lg-12">
                            <a className="houseLink d-flex justify-content-center align-items-center py-4"
                                href="/lannister">
                                <img className="houseLogo" src={Lannister} alt="Lannister"/>
                        </a>
                        </div>
                        <div className="col-lg-12">
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    slidesPerView={"auto"}
                                    coverflowEffect={{
                                        rotate: 25,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    centeredSlides={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/tywin">
                                        <img className="figureIMG" src={Tywin} alt="Tywin"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Tywin Lannister</div>
                                        <a href="tywin" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/tyrion">
                                        <img className="figureIMG" src={Tyrion} alt="Tyrion"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Tyrion Lannister</div>
                                        <a href="tyrion" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/Cersei">
                                        <img className="figureIMG" src={Cersei} alt="Cersei"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Cersei Lannister</div>
                                        <a href="cersei" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/Jaime">
                                        <img className="figureIMG" src={Jaime} alt="Jaime"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Jaime Lannister</div>
                                        <a href="jaime" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/joffrey">
                                        <img className="figureIMG" src={Joffrey} alt="Jaime"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Joffrey Baratheon</div>
                                        <a href="joffrey" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/tommen">
                                        <img className="figureIMG" src={Tommen} alt="Jaime"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Tommen Baratheon</div>
                                        <a href="tommen" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/myrcella">
                                        <img className="figureIMG" src={Myrcella} alt="Jaime"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Myrcella Baratheon</div>
                                        <a href="myrcella" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row listContainer lastContainer ">
                        <div className="col-lg-12">
                            <a className="houseLink d-flex justify-content-center align-items-center py-4"
                               href="/baratheon">
                                <img className="houseLogo" src={Baratheon} alt="Baratheon"/>
                            </a>
                        </div>
                        <div className="col-lg-12">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 25,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                centeredSlides={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <a className="figurenContainer" href="/robert">
                                        <img className="figureIMG" src={Robert} alt="Robert"/>
                                    </a>
                                    <div className="figurenName">
                                        <div className="py-3 figureHeadline">Robert Baratheon</div>
                                        <a href="/robert" className="figureBtn">
                                        <span>
                                            Mehr entdecken
                                        </span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Figuren;
