import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavbarComponent from "./components/NavbarComponent";
import {HomePage} from "./pages/HomePage";
import {MapPage} from "./pages/MapPage";
import {ListPage} from "./pages/ListPage";
import {VesselPage} from "./pages/VesselPage";
import {NoMatchPage} from "./pages/NoMatchPage";

function App() {
  return (
    <BrowserRouter>
        <NavbarComponent/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/vessels' element={<ListPage/>}/>
            <Route path='/vessels/:vesselMmsi' element={<VesselPage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='*' element={<NoMatchPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
