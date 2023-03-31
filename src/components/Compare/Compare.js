import React, { useState } from "react";
import "./Compare.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import kingslandingSeries from "../../img/headers/kingslading3.webp";
import kingslandingBook from "../../img/compare/kingslanding.jpeg";
import winterfellSeries from "../../img/headers/winterfellHeader.jpg";
import winterfellBook from "../../img/compare/winterfell.jpg";
import castleBlackSeries from "../../img/headers/castleBlackHeader.jpeg";
import castleBlackBook from "../../img/compare/castleBlack.jpg";
import harrenhalSeries from "../../img/headers/harrenhal2.webp";
import harrenhalBook from "../../img/compare/harrenhal.jpg";
import pykeSeries from "../../img/headers/pykeHeader.jpg";
import pykeBook from "../../img/compare/pyke2.webp";
import casterlyRockSeries from "../../img/headers/casterlyRockHeader.webp";
import casterlyRockBook from "../../img/compare/casterlyRock.jpg";
import dragonStoneSeries from "../../img/headers/dragonstone3.jpg";
import dragonStoneBook from "../../img/compare/dragonStone.jpeg";
import eyrieSeries from "../../img/headers/eyrieHeader.jpg";
import eyrieBook from "../../img/compare/eyrie.jpg";
import braavosSeries from "../../img/headers/braavosHeader.jpg";
import braavosBook from "../../img/compare/braavos.jpg";
import meerenSeries from "../../img/headers/meerenHeader.webp";
import meerenBook from "../../img/compare/meereen.jpg";

const headers = {
    kingslandingBook,
    kingslandingSeries,
    winterfellBook,
    winterfellSeries,
    castleBlackBook,
    castleBlackSeries,
    harrenhalBook,
    harrenhalSeries,
    pykeSeries,
    pykeBook,
    casterlyRockSeries,
    casterlyRockBook,
    dragonStoneSeries,
    dragonStoneBook,
    eyrieSeries,
    eyrieBook,
    braavosSeries,
    braavosBook,
    meerenBook,
    meerenSeries,
};
const Compare = (props) => {

    const pic1 = headers[props.pic1];
    const pic2 = headers[props.pic2];


    return (
        <div className="lastContainer d-flex justify-content-center align-items-center">
            <ReactCompareSlider className="compareContainer"
                itemOne={<ReactCompareSliderImage src={pic1} srcSet="" alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={pic2} srcSet="" alt="Image two" />}
            />
        </div>
    );
};

export default Compare;
