import { gsap, ScrollTrigger, Power4 } from "gsap/all";
import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import LogoLeft from "./LogoLeft";
import LogoRight from "./LogoRight";
import styles from "./styles.module.css";

import {FaReact, FaAngular, FaNodeJs, FaBootstrap, FaGitAlt} from "react-icons/fa"
import { SiExpress, SiFirebase, SiMongodb, SiRedux, SiTailwindcss, SiTypescript, SiGreensock} from "react-icons/si"
import Footer from "../../components/Footer";

const Skills = () => {

    // useLocoScroll();

    const mainRef = useRef();

    useLayoutEffect(() => {

            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                gsap.from("#curtain", {
                    duration: 10,
                    x: "-100vw",
                    ease: Power4.ease,
                    scrollTrigger: {
                        trigger: mainRef.current,
                        start: "top top",
                        end: "bottom center",
                        scrub: true,
                        // scroller: "#main-container",
                        toggleActions: "play none none reverse"
                    }
                })

            }, mainRef)

            return () => {
                ctx.revert()
                ScrollTrigger.killAll()
            };

        }, [])

    return (
        <>
            <div style={{position: "relative", overflow: "hidden"}}>
                <div style={{position: "relative", overflow: "hidden", height: "100vh"}} ref={mainRef}>
                    <div className={styles.curtain} id="curtain"></div>
                    <div className={styles.pageTransitionBlack} id="main">
                        <Navbar />
                        <Header headerText={"My Skills"}/>
                    </div>
                </div>  
                <LogoLeft icon={<FaReact />} description={"Built all of my personal/fun projects using React and have the most experience with it."} color={"#61DBFB"}/>
                <LogoRight icon={<FaAngular />} description={"Built multiple functional sites with both Front-End and Back-End."} color={"#dd1b16"}/>
                <LogoLeft icon={<SiExpress />} description={"Built multiple Back-Ends implementing it with Node.js"} color={"#3C873A"}/>
                <LogoRight icon={<FaNodeJs />} description={"Connected my Node.js Back-Ends with React Front-Ends in multiple personal projects."} color={"#68a063"}/>
                <LogoLeft icon={<SiFirebase />} description={"My go to, used it in a plethora of big personal projects."} color={"#FFA611"}/>
                <LogoRight icon={<SiMongodb />} description={"Enjoyed using a non SQL database for my personal projects."} color={"#4DB33D"}/>
                <LogoLeft icon={<FaBootstrap />} description={"Used it to fasten my work and build modern looking UIs."} color={"#563d7c"}/>
                <LogoRight icon={<SiRedux />} description={"Used it to update and maitain data across my React application."} color={"#764abc"}/>
                <LogoLeft icon={<SiTailwindcss />} description={"Tried out Tailwind CSS for my components in React."} color={"#3490dc"}/>
                <LogoRight icon={<SiTypescript />} description={"Know the basic implementation of it with React and vanilla JS."} color={"#007acc"}/>
                <LogoLeft icon={<FaGitAlt />} description={"Took a Linkedin Course about the basics of Git commands, and used them for my personal projects since then."} color={"#F1502F"}/>
                <LogoRight icon={<SiGreensock />} description={"Got addicted to using GSAP for fast and smooth page animations."} color={"#379237"}/>
                <Footer />
            </div>
        </>
    );
}

export default Skills;