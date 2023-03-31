import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Jon = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"jonHeader"} title={"Jon"}/>

                <Content
                    quote={'"Love Is The Death Of Duty."'}
                    quotePerson={"-Jon Snow"}
                    description={"Jon Snow, ist der Sohn von Rhaegar Targaryen und Lyanna Stark. Er wurde von Eddard Stark als sein Bastard großgezogen, um ihm vor Roberts Baratheon zu beschützen. Er schloss sich freiwillig der Nachtwache an."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Jon;