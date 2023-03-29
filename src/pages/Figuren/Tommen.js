import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Tommen = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"tommenHeader"} title={"Tommen"}/>

                <Content
                    quote={'"I\'ve married the most beautiful woman in the world, and it\'s all because my brother died\n' +
                        '\n"'}
                    quotePerson={"-Tommen Baratheon"}
                    description={"Tommen ist der jüngste Sohn von Jaime und Cersei. Er wurde nach Jofrei zum König gekrönt."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Tommen;