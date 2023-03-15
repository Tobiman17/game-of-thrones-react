import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Headline.css';


const Headline = (props) => {

    useEffect(() => {
        AOS.init();
    }, []);

    let headlineDiv;

    switch(props.headline) {
        case "Winterfell":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        W
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        F
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        L
                    </div>
                </div>
            );
            break;
        case "Kingslanding":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        K
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        G
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        D
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        G
                    </div>
                </div>
            );
            break;
        case "Eddard":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        D
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        D
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        D
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        K
                    </div>
                </div>
            );
            break;
        case "F":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        F
                    </div>
                </div>
            );
            break;
        default:
            headlineDiv = null;
    }

    return (
        <>
            {headlineDiv}
        </>
    );
};

export default Headline;
