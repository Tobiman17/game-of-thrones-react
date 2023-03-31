import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Baratheon = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"baratheonHeader"} title={"Baratheon"}/>

                <Content
                    quote={'"Ours is the fury"'}
                    quotePerson={"-Worte des Hauses"}
                    description={"Ein altes Haus, was durch Robert Baratheons Rebellion and die Macht kam und die Targaryens stürzte."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Baratheon;