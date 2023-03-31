import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Jaime = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"jaimeHeader"} title={"Jaime"}/>

                <Content
                    quote={'"The things we do for love."'}
                    quotePerson={"-Jaime Lannister"}
                    description={"Jaime Lannister ist der Sohn von Tywin Lannister. Er und seine Schwester Cersei Lannister bekommen 3 Kinder: Jofrei, Tommen und Myrcella. Er ist der Welt als Königsmörder bekannt, da er Aerys, dem irren König, sein Schwert in den Rücken stach."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Jaime;