import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";
import Compare from "../../components/Compare/Compare";

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
                    description={"Kingslanding ist die Hauptstadt von Westeros und der sieben Königslande. Es ist die größte Stadt von Westeros, es leben ca. 1 Million Menschen in der Stadt. Sie wurde von Aegon Targaryen (Der Eroberer) als neuen Sitz seines Hauses erbaut und um von ihr aus über die 7 Königslande zu herrschen."}
                    quotePerson={"-Petyr Baelish"}
                />
            </div>
            <Compare pic1={"kingslandingBook"} pic2={"kingslandingSeries"}/>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Kingslanding;