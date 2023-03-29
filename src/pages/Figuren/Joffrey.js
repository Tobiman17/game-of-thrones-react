import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Joffrey = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"joffreyHeader"} title={"Joffrey"}/>

                <Content
                    quote={'"Ser Ilyn, bring me his head!"'}
                    quotePerson={"-Joffrey Baratheon"}
                    description={"Joffrey ist der älteste Sohn von Jaime und Cersei. Er wurde nach Robert Baratheons Tod zum König gekrönt."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Joffrey;