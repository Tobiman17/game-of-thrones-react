import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Lannister = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"lannisterHeader"} title={"Lannister"}/>

                <Content
                    quote={'"Hear me Roar"'}
                    quotePerson={"-Worte des Hauses"}
                    description={""}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Lannister;