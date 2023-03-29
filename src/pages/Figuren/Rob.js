import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Rob = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"robHeader"} title={"Rob"}/>

                <Content
                    quote={'"Tell Lord Tywin winter is coming for him. Twenty thousand northerners marching south to find out if he really does shit gold"'}
                    quotePerson={"-Rob Stark"}
                    description={"Rob Stark ist der älteste Sohn von Eddard Stark. Er wurde in Staffel 1 Folge 10 zum König des Nordens ernannt. Er ging in den Krieg um seinen Vater aus Königsmund zu befreien."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Rob;