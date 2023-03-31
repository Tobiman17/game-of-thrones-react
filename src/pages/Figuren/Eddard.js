import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Eddard = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"eddardHeader"} title={"Eddard"}/>

                <Content
                    quote={'"The man who passes the sentence should swing the sword."'}
                    quotePerson={"-Eddard Stark"}
                    description={"Eddard Stark ist der Lord von Winterfell und Wächter des Nordens. Er ist der beste Freund von Robert Barathon, zusammen kämpften sie in der Rebellion gegen die Targaryens."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Eddard;