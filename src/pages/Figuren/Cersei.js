import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Cersei = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"cerseiHeader"} title={"Cersei"}/>

                <Content
                    quote={'"When You Play The Game Of Thrones, You Win Or You Die."'}
                    quotePerson={"-Cersei Lannister"}
                    description={"Cersei Lannister ist die Tochter von Tywin Lannister. Sie ist die Frau von Robert Baratheon und die Königin von Westeros. Sie und ihr Bruder Jaime Lannister bekommen 3 Kinder: Joffrey, Tommen und Myrcella."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Cersei;