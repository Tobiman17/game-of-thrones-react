import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Arya = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"aryaHeader"} title={"Arya"}/>

                <Content
                    quote={'"Not today."'}
                    quotePerson={"-Arya Stark"}
                    description={"Arya Stark ist die Tochter von Eddard und Catlyn Stark."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Arya;