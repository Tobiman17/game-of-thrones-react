import React from "react";
import Header from "../../components/Header/Header";
import Sparks from "../../components/Sparks/Sparks";
import Content from "../../components/Content/Content";
import BackBTN from "../../components/BackBTN/BackBTN";
import Smoke from "../../components/Smoke/Smoke";
import Menu from "../../components/Menu/Menu";
import LightCursor from "../../components/LightingCursor/LightCursor";
import Snowfall from "react-snowfall";
import Compare from "../../components/Compare/Compare";

const CastleBlack = () => {
    return (
        <>
            <BackBTN/>
            <Menu />
            <LightCursor />
            <Snowfall style={{zIndex: "500", position:"fixed"}} snowflakeCount={200} />

            <div id="pageContent">
                <Header header={"castleBlackHeader"} title={"CastleBlack"}/>
                <Content
                    quote={'"There was scant warmth to be found in Castle Black. The walls were cold here, and the people colder."'}
                    description={"Die schwarze Festung ist die größte bemannte Festung der Mauer. Sie wird von den eingeschowerenen Brüdern der Nachtwache bewacht und geschütz. Die Krähen beschützen Westeros vor Wildlingen und weißen Wanderern. "}
                    quotePerson={"-Jon Snow"}
                    quotePersonLink={"/jon"}

                />
                <Compare pic1={"castleBlackBook"} pic2={"castleBlackSeries"}/>
            </div>
        </>
    )
}

export default CastleBlack;