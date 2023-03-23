import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Tyrion = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"tyrionHeader"} title={"Tyrion"}/>

                <Content
                    quote={'"Thats what i do. I drink and i know things"'}
                    quotePerson={"-Tyrion Lannister"}
                    description={"Tyrion Lannister ist der Sohn von Tywin Lannister. Er gilt als der klügste Mann von Westeros."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Tyrion;