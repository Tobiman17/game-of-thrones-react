import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Sparks from "../components/Sparks/Sparks";
import Smoke from "../components/Smoke/Smoke";
import Snowfall from "react-snowfall";
import Content from "../components/Content/Content";
import BackBTN from "../components/BackBTN/BackBTN";
import Menu from "../components/Menu/Menu";
import LightCursor from "../components/LightingCursor/LightCursor";



const Winterfell = () => {



    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <Header header={"winterfellHeader"} title={"Winterfell"} />
            <Snowfall style={{zIndex: "500", position:"fixed"}} snowflakeCount={200} />
            <Content quote={"Vergiss nie, was du bist, der Rest der Welt tut es auch nicht. Trage es wie eine Rüstung, dann kann es nie dazu benutzt werden, dich zu verletzen."} description={"Kingslanding ist die Hauptstadt von Westeros."} />
            <Smoke />

        </>
    );
};

export default Winterfell;