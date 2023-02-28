import React, { useState } from "react";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import LightCursor from "../components/LightingCursor/LightCursor";
import "./List.css";

const Figuren = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = (event) => {
        console.log("HELP")
        const wrapper = event.target;
        if (wrapper) {
            const scrollPercentage = wrapper.scrollLeft / wrapper.scrollWidth * 240;
            setScrollPosition(scrollPercentage);
            console.log(wrapper.scrollLeft)
        }
    };


    return (
        <>
            <BackBTN />
            <Menu />
            <LightCursor />
            <div className="d-flex justify-content-center align-items-center">
                <div className="container customContainerList">
                    <div className="row">
                        <div className="col-lg-2">test</div>
                        <div className="col-lg-10">
                            <div
                                className="horizontal-scroll-wrapper customList"
                                onScroll={handleScroll}
                            >
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                                <div className="listItem">TEST</div>
                            </div>
                            <div className="scroll-bar">
                                <div
                                    className="scroll-progress"
                                    style={{ width: `${scrollPosition}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Figuren;
