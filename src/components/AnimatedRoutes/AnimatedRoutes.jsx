import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../main/main";
import { AnimatePresence } from "framer-motion";
import About from "../about/About";

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Main />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;