import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Targaryen = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"targaryenHeader"} title={"Targaryen"}/>

                <Content
                    quote={'"Fire and Blood"'}
                    quotePerson={"-Worte des Hauses"}
                    description={""}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Targaryen;