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
        case "CasterlyRock":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        K
                    </div>
                </div>
            );
            break;
        case "CastleBlack":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        B
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        K
                    </div>
                </div>
            );
            break;
        case "DragonStone":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        D
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        G
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        N
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
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        E
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
        case "Catlyn":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        N
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
        case "Rob":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        B
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        K
                    </div>
                </div>
            );
            break;
        case "Jon":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        J
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        W
                    </div>
                </div>
            );
            break;
        case "Daenerys":
            headlineDiv = (
                <div>
                    <div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                            D
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                            A
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            E
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            N
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                            E
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            R
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                            Y
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                            S
                        </div>
                    </div>
                    <div >
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                            T
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                            A
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                            R
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            G
                        </div>
                        <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            A
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            R
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                            Y
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                            E
                        </div>
                        <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                            N
                        </div>
                    </div>
                </div>
            );
            break;
        case "Tywin":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        Y
                    </div>
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
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        R
                    </div>
                </div>
            );
            break;
        case "Tyrion":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

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
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        R
                    </div>
                </div>
            );
            break;
        case "Cersei":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

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
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        R
                    </div>
                </div>
            );
            break;
        case "Jaime":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        J
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        M
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

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
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        R
                    </div>
                </div>
            );
            break;
        case "Stark":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        U
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">

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
        case "Targaryen":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        U
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">

                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        G
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        N
                    </div>
                </div>
            );
            break;
        case "Lannister":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        U
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">

                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        S
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        R
                    </div>
                </div>
            );
            break;
        case "Joffrey":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">
                        J
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        F
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        F
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        B
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
                        N
                    </div>
                </div>
            );
            break;
        case "Myrcella":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">
                        M
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        Y
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        C
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        L
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">

                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        B
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
                        N
                    </div>
                </div>
            );
            break;
        case "Tommen":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        M
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                        M
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        N
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">

                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        B
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        A
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        T
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                        H
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        O
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
                        N
                    </div>
                </div>
            );
            break;
        case "Figuren":
            headlineDiv = (
                <div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                        F
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                        I
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        G
                    </div>
                    <div className="headerElement" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        U
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        R
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        E
                    </div>
                    <div className="headerElement" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                        N
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
