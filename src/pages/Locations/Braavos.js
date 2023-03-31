
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



const Braavos = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Sparks/>
            <Header header={"braavosHeader"} title={"Braavos"} />
            <Content quote={'"Valar morghulis"'}
                     description={"Braavos ist ein Freistaat der ursprünglich aus Valyria entstanden ist."}
                     quotePerson={"-Jack n Hagar"}
            />
            <Compare pic1={"braavosBook"} pic2={"braavosSeries"}/>

            <Smoke />
        </>
    );
};

export default Braavos;