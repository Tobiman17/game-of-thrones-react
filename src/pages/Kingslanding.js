import React from "react";
import Header from "../components/Header/Header";
import Sparks from "../components/Sparks/Sparks";
import Content from "../components/Content/Content";
import BackBTN from "../components/BackBTN/BackBTN";
import Smoke from "../components/Smoke/Smoke";

const Kingslanding = () => {
    return (
        <>
            <BackBTN/>
            <div id="pageContent">
                <Header header={"kingslandingHeader"} title={"Kingslanding"}/>
                <Sparks/>
                <Content
                    quote={"Vergiss nie, was du bist, der Rest der Welt tut es auch nicht. Trage es wie eine Rüstung, dann kann es nie dazu benutzt werden, dich zu verletzen."}
                    description={"Kingslanding ist die Hauptstadt von Westeros."}/>
                <Smoke/>
            </div>
        </>
    )
}

export default Kingslanding;