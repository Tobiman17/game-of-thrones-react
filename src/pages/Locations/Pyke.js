
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



const Pyke = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Sparks/>
            <Header header={"pykeHeader"} title={"Pyke"} />
            <Content quote={'"All that remained were three bare and barren islands and a dozen towering stacks of rock that rose from the water like the pillars of some sea god\'s temple, while the angry waves foamed and crashed among them."'}
                     description={"Der Hauptsitz der Greyjoys. Pyke liegt auf einer kleinen Inselgrupper, die den namen Eiseninseln tragen."}
                     quotePerson={"-Theon Greyjoy"}
                     quotePersonLink={""}
            />
            <Compare pic1={"pykeBook"} pic2={"pykeSeries"}/>
            <Smoke />
        </>
    );
};

export default Pyke;