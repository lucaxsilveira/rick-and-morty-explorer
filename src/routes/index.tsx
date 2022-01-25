import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Character from "../pages/Character";

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
    </Router>
);

export default AppRoutes;
