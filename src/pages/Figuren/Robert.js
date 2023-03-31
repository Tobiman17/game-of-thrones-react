import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Robert = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"robertHeader"} title={"Robert"}/>
                <Content
                    quote={'"Wear it in silence or I\'ll honor you again."'}
                    quotePerson={"-Robert Baratheon"}
                    description={"Robert Baratheon ist der König von Westeros. Er ist mit Cersei Lannister verheiratet. Er führte die Rebellion gegen die Targaryens an. Nach ihm ist die Rebellion benannt."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Robert;