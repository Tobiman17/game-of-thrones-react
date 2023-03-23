import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Jaime = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"jaimeHeader"} title={"Jaime"}/>

                <Content
                    quote={'"When You Play The Game Of Thrones, You Win Or You Die."'}
                    quotePerson={"-Jaime Lannister"}
                    description={"Jaime Lannister ist der Sohn von Tywin Lannister. Er und seine Schwester Cersei Lannister bekommen 3 Kinder: Jofrei, Tommen und Myrcella."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Jaime;