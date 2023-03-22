import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Catlyn = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"catlynHeader"} title={"Catlyn"}/>

                <Content
                    quote={'"If You Lose, Your Father Dies, Your Sisters Die, We Die."'}
                    quotePerson={"-Catelyn Stark"}
                    description={"Catelyn Stark ist die Mutter von Rob, Bran, Rickon, Sansa und Arya. Sie ist die Lady von Winterfell. Catlyn kommt aus dem Haus Tully und wurde in jungen Jahren mit Eddard verheiratet."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Catlyn;