import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";

const Dany = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor/>
            <div id="pageContent">
                <Header header={"danyHeader"} title={"Daenerys"}/>

                <Content
                    quote={'"Dracarys"'}
                    quotePerson={"-Daenerys Targaryen"}
                    description={"Daenerys Targaryen ist die Tochter von Aerys Targaryen, dem Irren König. Sie und ihrem Bruder Viserys flüchteten nach Essos, nachdem Robert Baratheons Rebellion erfolgreich war und deren Vater von Jaime Lannister getötet wurde."}/>
            </div>
            <Smoke />
            <Sparks />
        </>
    )
}

export default Dany;