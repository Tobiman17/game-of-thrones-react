import React, {useEffect, useState} from "react";
import './Menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import logo from "../../img/logo.png";

const BackBTN = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    useEffect(() => {
        if (menuStatus) {
            document.getElementById("menuContainer").classList.add("active");
        } else {
            document.getElementById("menuContainer").classList.remove("active");

        }
    }, [menuStatus]);

    function toggleMenuStatus() {
        if (menuStatus) {
            setMenuStatus(false);
        } else {
            setMenuStatus(true);
        }
    }

    return (
        <>
            <div id="menuBTN">
                <div onClick={toggleMenuStatus} className="menuBTN">
                    <span className="menuBTNText">Menu</span>
                </div>
            </div>
            <div id="menuContainer" className=" menuContainer ">
                <div className="menu">
                    <div className="closeBtnContainer">
                        <div onClick={toggleMenuStatus} className="closeBTN">
                            <FontAwesomeIcon className="closeIcon" icon={faTimes}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="logoIMG" src={logo} alt="header" />
                    </div>
                    <div className="menuTextContainer">
                        <a href={"/map"} className="menuHeadline">
                            Karte
                        </a>
                        <a href={"/figuren"} className="menuHeadline">
                            Figuren
                        </a>
                        <a href={"/orte"} className="menuHeadline">
                            Orte
                        </a>
                        <a href={"/houses"} className="menuHeadline">
                            Häuser
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackBTN;