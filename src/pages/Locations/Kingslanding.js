import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Kingslanding = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />

            <div id="pageContent">
                <Header header={"kingslandingHeader"} title={"Kingslanding"}/>
                <Content
                    quote={'"In King\'s Landing, there are two sorts of people. The players and the pieces ... Every man\'s a piece to start with, and every maid as well. Even some who think they are players. "'}
                    description={"Kingslanding ist die Hauptstadt von Westeros und der sieben Königslande. Es ist die größte Stadt von Westeros und wurde von Aegon Targaryen (Der Eroberer) als Sitz seines Hauses erbaut."}
                    quotePerson={"-Petyr Baelish"}
                />
            </div>

            <Smoke />
            <Sparks />
        </>
    )
}

export default Kingslanding;