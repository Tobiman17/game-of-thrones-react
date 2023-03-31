
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



const Eyrie = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Sparks/>
            <Header header={"eyrieHeader"} title={"Eyrie"} />
            <Content quote={'"Above the Vale, the Eyrie stood high and impregnable, its towers reaching for the sky."'}
                     description={"Die Eyrie ist eine Festung auf einem Berg. Sie gilt als uneinnehmbar. Das Haus Arryn hat dort seinen Sitz."}
                     quotePerson={"-Catlyn Stark"}
                     quotePersonLink={"/catlyn"}
            />
            <Compare pic1={"eyrieBook"} pic2={"eyrieSeries"}/>

            <Smoke />
        </>
    );
};

export default Eyrie;