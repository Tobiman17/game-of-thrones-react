import './App.css';
import React from "react";
import Map from "./pages/Map/Map";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Winterfell from "./pages/Locations/Winterfell";
import { PageTransition } from '@steveeeie/react-page-transition';
import Figuren from "./pages/Figuren";
import Orte from "./pages/Orte";
import Eddard from "./pages/Figuren/Eddard";
import CasterlyRock from "./pages/Locations/CasterlyRock";
import CastleBlack from "./pages/Locations/CastleBlack";
import DragonStone from "./pages/Locations/DragonStone";
import Catlyn from "./pages/Figuren/Catlyn";
import Kingslanding from "./pages/Locations/Kingslanding";
import Rob from "./pages/Figuren/Rob";
import Jon from "./pages/Figuren/Jon";
import LandingPage from "./components/LandingPage/LandingPage";
import Dany from "./pages/Figuren/Dany";
import Tywin from "./pages/Figuren/Tywin";
import Tyrion from "./pages/Figuren/Tyrion";
import Cersei from "./pages/Figuren/Cersei";
import Jaime from "./pages/Figuren/Jaime";
import Stark from "./pages/Hauser/Stark";
import Targaryen from "./pages/Hauser/Targaryen";
import Houses from "./pages/Houses";
import Lannister from "./pages/Hauser/Lannister";
import Joffrey from "./pages/Figuren/Joffrey";
import Tommen from "./pages/Figuren/Tommen";
import Myrcella from "./pages/Figuren/Myrcella";
import Sansa from "./pages/Figuren/Sansa";
import Arya from "./pages/Figuren/Arya";
import Bran from "./pages/Figuren/Bran";
import Rickon from "./pages/Figuren/Rickon";
import Braavos from "./pages/Locations/Braavos";
import Meeren from "./pages/Locations/Meeren";
import Baratheon from "./pages/Hauser/Baratheon";
import Robert from "./pages/Figuren/Robert";
import Eyrie from "./pages/Locations/Eyrie";
import Harrenhall from "./pages/Locations/Harrenhall";
import Pyke from "./pages/Locations/Pyke";


function App() {
    return (
        <>
            <div className={"allContent"}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Map/>}/>
                        <Route path="/map" element={<Map/>}/>
                        <Route path="/winterfell" element={<Winterfell/>}/>
                        <Route path="/kingslanding" element={<Kingslanding/>}/>
                        <Route path="/orte" element={<Orte/>}/>
                        <Route path="/houses" element={<Houses/>}/>
                        <Route path="/eddard" element={<Eddard/>}/>
                        <Route path="/casterlyrock" element={<CasterlyRock/>}/>
                        <Route path="/castleBlack" element={<CastleBlack/>}/>
                        <Route path="/dragonStone" element={<DragonStone/>}/>
                        <Route path="/catlyn" element={<Catlyn/>}/>
                        <Route path="/figuren" element={<Figuren/>}/>
                        <Route path="/rob" element={<Rob/>}/>
                        <Route path="/jon" element={<Jon/>}/>
                        <Route path="/daenerys" element={<Dany/>}/>
                        <Route path="/tywin" element={<Tywin/>}/>
                        <Route path="/tyrion" element={<Tyrion/>}/>
                        <Route path="/cersei" element={<Cersei/>}/>
                        <Route path="/jaime" element={<Jaime/>}/>
                        <Route path="/stark" element={<Stark/>}/>
                        <Route path="/targaryen" element={<Targaryen/>}/>
                        <Route path="/lannister" element={<Lannister/>}/>
                        <Route path="/joffrey" element={<Joffrey/>}/>
                        <Route path="/tommen" element={<Tommen/>}/>
                        <Route path="/myrcella" element={<Myrcella/>}/>
                        <Route path="/arya" element={<Arya/>}/>
                        <Route path="/sansa" element={<Sansa/>}/>
                        <Route path="/bran" element={<Bran/>}/>
                        <Route path="/rickon" element={<Rickon/>}/>
                        <Route path="/braavos" element={<Braavos/>}/>
                        <Route path="/meeren" element={<Meeren/>}/>
                        <Route path="/baratheon" element={<Baratheon/>}/>
                        <Route path="/robert" element={<Robert/>}/>
                        <Route path="/eyrie" element={<Eyrie/>}/>
                        <Route path="/harrenhal" element={<Harrenhall/>}/>
                        <Route path="/pyke" element={<Pyke/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>

    );
}

export default App;
