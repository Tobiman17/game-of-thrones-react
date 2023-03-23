import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Tywin = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"tywinHeader"} title={"Tywin"}/>

                <Content
                    quote={'"A Lion doesn\'t concerned himself with the opinion of a sheep."'}
                    quotePerson={"-Tywin Lannister"}
                    description={"Tywin Lannister ist das Oberhaupt der Lannisters, der Lord von Casterly Rock und der Wächter des Westens. Er gilt als der mächtigste Mann der Welt."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Tywin;