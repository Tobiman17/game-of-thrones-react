import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Bran = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"branHeader"} title={"Bran"}/>

                <Content
                    quote={'"How do you know there is an afterwards?"'}
                    quotePerson={"-Bran Stark"}
                    description={"Bran Stark ist der Sohn von Eddard und Catlyn Stark."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Bran;