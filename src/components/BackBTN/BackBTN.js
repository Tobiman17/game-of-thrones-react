import React from "react";
import './BackBTN.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const BackBTN = () => {

    return (
        <div id="backBTN">
            <a href={"/map"}  className="backBTN">
                <FontAwesomeIcon className="backIcon" icon={faArrowLeft} />
            </a>
        </div>
    )
}

export default BackBTN;