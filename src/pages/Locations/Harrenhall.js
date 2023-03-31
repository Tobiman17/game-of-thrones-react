
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Smoke from "../../components/Smoke/Smoke";
import Snowfall from "react-snowfall";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";
import Compare from "../../components/Compare/Compare";



const Harrenhal = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Sparks/>
            <Header header={"harrenhalHeader"} title={"Harrenhal"} />
            <Content quote={'"Harrenhal had witnessed more horror in its three hundred years than Casterly Rock had witnessed in three thousand."'}
                     description={"Harrenhal wurde von Aegon dem Eroberer und seinem Drachen, Balerion dem schwarzen Schrecken, zerstört und verbrannt um die Macht der Drachen und Targaryens zu demonstrieren."}
                     quotePerson={"-Jaime Lannister"}
                     quotePersonLink={"/jaime"}
            />
            <Compare pic1={"harrenhalBook"} pic2={"harrenhalSeries"}/>

            <Smoke />
        </>
    );
};

export default Harrenhal;