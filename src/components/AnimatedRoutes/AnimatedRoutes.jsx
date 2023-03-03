import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../../pages/main/main";
import { AnimatePresence } from "framer-motion";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import Resume from "../../pages/resume/Resume";
import Certificates from "../../pages/certificates/Certificates";
import {gsap, ScrollTrigger} from "gsap/all";

const AnimatedRoutes = () => {
    const location = useLocation()

    // useLocoScroll(); // Locomotive Scroll
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    return (
        <AnimatePresence>
            {/* id="main-container" data-scroll-container <--- This code is needed for the locomotive scroll to work  */}
            <div>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/certificates" element={<Certificates />}/>
                </Routes>
            </div>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;