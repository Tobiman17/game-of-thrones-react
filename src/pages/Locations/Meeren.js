
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



const Meeren = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Sparks/>
            <Header header={"meerenHeader"} title={"Meeren"} />
            <Content quote={'"That is a vital part of the great city of Meereen, which existed long before you or I, and will remain standing long after we\'ve returned to the dirt."'}
                     description={"Meereen ist eine der ältesten Städte der Welt. Sie wurde von Daenerys eingenommen, um die Sklavenarbeit abzuschaffen."}
                     quotePerson={"-Hizdahr zo Loraq"}
            />
            <Compare pic1={"meerenBook"} pic2={"meerenSeries"}/>
            <Smoke />
        </>
    );
};

export default Meeren;