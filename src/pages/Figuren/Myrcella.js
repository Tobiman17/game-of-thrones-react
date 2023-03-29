import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Myrcella = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"myrcellaHeader"} title={"Myrcella"}/>

                <Content
                    quote={'"We\'re children. We\'re supposed to be childish."'}
                    quotePerson={"-Myrcella Baratheon"}
                    description={"Myrcella ist die Tochter von Jaime und Cersei Lannister."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Myrcella;