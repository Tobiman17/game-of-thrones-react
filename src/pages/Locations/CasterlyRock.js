import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const CasterlyRock = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"casterlyRockHeader"} title={"CasterlyRock"}/>
                <Content
                    quote={'"Casterly Rock is an impregnable fortress. But as a good friend of mine once said, Give me ten good men…and I’ll impregnate the bitch!"'}
                    description={"Casterly Rock ist der Hauptsitz der Lannisters und die Hauptstadt des Westens."}
                    quotePerson={"-Tyrion Lannister"}
                />
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default CasterlyRock;