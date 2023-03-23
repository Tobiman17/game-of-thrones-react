import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Smoke from "../../components/Smoke/Smoke";
import Snowfall from "react-snowfall";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";



const Winterfell = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <Header header={"winterfellHeader"} title={"Winterfell"} />
            <Snowfall style={{zIndex: "500", position:"fixed"}} snowflakeCount={200} />
            <Content quote={'"There must always be a Stark in Winterfell."'}
                     description={"Winterfell ist der Hauptsitz der Starks und die Hauptstadt des Nordens. Die Burg wurde von Brandon dem Erbauer erbaut, lange bevor die Targayrens an der Macht waren."}
                     quotePerson={"-Catelyn Stark"}
                     quotePersonLink={"/catlyn"}
            />
            <Smoke />
        </>
    );
};

export default Winterfell;