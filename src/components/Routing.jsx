/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Individual from "./Individual";
import Team from "./Team";
import Enterprise from './Enterprise';
import '../App.css';

 function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/team" element={<Team />} />
            <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
    )
}

export default Routing