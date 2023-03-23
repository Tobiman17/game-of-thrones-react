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


function App() {
    return (
        <>
            <div className={"allContent"}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<LandingPage/>}/>
                        <Route path="/map" element={<Map/>}/>
                        <Route path="/winterfell" element={<Winterfell/>}/>
                        <Route path="/kingslanding" element={<Kingslanding/>}/>
                        <Route path="/orte" element={<Orte/>}/>
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
                    </Routes>
                </BrowserRouter>
            </div>
        </>

    );
}

export default App;
