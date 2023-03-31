import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";
import Compare from "../../components/Compare/Compare";

const DragonStone = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"dragonStoneHeader"} title={"DragonStone"}/>
                <Content
                    quote={'"Perhaps the old tales were true, and Dragonstone was built with the stones of hell."'}
                    description={"Dragonstone ist der Hauptsitz der Targaryens. Aegon der Eroberer eroberte von hier aus Westeros, mit seinen 2 Schwesterfrauen. Dragonstone ist eine Insel östlich von Kingslanding."}
                    quotePerson={"-Davos Seaworth"}
                />
                <Compare pic1={"dragonStoneBook"} pic2={"dragonStoneSeries"}/>

            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default DragonStone;