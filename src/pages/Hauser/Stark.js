import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Stark = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"starkHeader"} title={"Stark"}/>

                <Content
                    quote={'"Winter is Coming"'}
                    quotePerson={"-Worte des Hauses"}
                    description={"Haus Stark ist das älteste noch existierende Haus von Westeros. Winterfell, die Mauer und Stormsend wurden von Brandon dem Erbauer erbaut. Die Wurzeln von Haus Stark reichen bis zu den ersten Menschen, daher glauben sie noch immer an die alten Götter."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Stark;