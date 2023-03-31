import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Sansa = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"sansaHeader"} title={"Sansa"}/>

                <Content
                    quote={'"Your words will disappear. Your house will disappear. Your name will disappear. All memory of you will disappear."'}
                    quotePerson={"-Sansa Stark"}
                    description={"Sansa Stark ist die älteste Tochter von Eddard und Catlyn Stark. Sie wird mit Joffrey Baratheon verheiratet."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Sansa;