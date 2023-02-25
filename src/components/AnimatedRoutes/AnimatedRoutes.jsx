import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../../pages/main/main";
import { AnimatePresence } from "framer-motion";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";

const AnimatedRoutes = () => {
    const location = useLocation()

    // useLocoScroll(); // Locomotive Scroll

    return (
        <AnimatePresence>
            <div id="main-container" data-scroll-container>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/skills" element={<Skills />}/>
                </Routes>
            </div>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;