import './App.css';
import React from "react";
import Map from "./pages/Map/Map";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Winterfell from "./pages/Winterfell";
import Kingslanding from "./pages/Kingslanding";
import { PageTransition } from '@steveeeie/react-page-transition';
import Figuren from "./pages/Figuren";
import Orte from "./pages/Orte";
import Eddard from "./pages/Figuren/Eddard";


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
                        <Route path="/figuren" element={<Figuren/>}/>
                        <Route path="/orte" element={<Orte/>}/>
                        <Route path="/eddard" element={<Eddard/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>

    );
}

export default App;
