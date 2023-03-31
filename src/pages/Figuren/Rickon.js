import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Rickon = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"rickonHeader"} title={"Rickon"}/>

                <Content
                    quote={'"We\'re Not Southerners."'}
                    quotePerson={"-Rickon Stark"}
                    description={"Rickon Stark ist der jüngste Sohn von Eddard und Catlyn Stark."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Rickon;