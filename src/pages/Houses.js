import React, { useEffect } from "react";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import LightCursor from "../components/LightingCursor/LightCursor";
import Stark from "../img/stark/stark.png";
import Targayren from "../img/targaryen/targaryenLogo.png";
import Lannister from "../img/lannister/lannisterLogo.svg";
import Smoke from "../components/Smoke/Smoke";
import Sparks from "../components/Sparks/Sparks";


const Orte = () => {

    return (
        <>
            <BackBTN/>
            <Menu />
            <Smoke/>
            <Sparks/>
            <div className="container customContainerList housesContainer">
                <div className="row py-5">
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/stark">
                            <img className="houseLogoHousePage" src={Stark} alt="Stark"/>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/targaryen">
                            <img className="houseLogoHousePage" src={Targayren} alt="Targayren"/>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/lannister">
                            <img className="houseLogoHousePage" src={Lannister} alt="Lannister"/>
                        </a>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/stark">
                            <img className="houseLogoHousePage" src={Stark} alt="Stark"/>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/targaryen">
                            <img className="houseLogoHousePage" src={Targayren} alt="Targayren"/>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a className="houseLink  d-flex align-items-center justify-content-center" href="/lannister">
                            <img className="houseLogoHousePage" src={Lannister} alt="Lannister"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orte;