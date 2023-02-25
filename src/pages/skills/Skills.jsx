import gsap, { Power4 } from "gsap";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import useLocoScroll from "../../hooks/useLocoScroll";
import LogoLeft from "./LogoLeft";
import LogoRight from "./LogoRight";
import styles from "./styles.module.css";

import {FaReact, FaAngular, FaNodeJs, FaBootstrap} from "react-icons/fa"
import { SiExpress, SiFirebase, SiMongodb, SiRedux, SiTailwindcss} from "react-icons/si"

const Skills = () => {

    useLocoScroll();

    const mainRef = useRef();

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from("#curtain", {
    //             duration: 10,
    //             x: "-100vw",
    //             ease: Power4.ease,
    //             scrollTrigger: {
    //                 trigger: mainRef.current,
    //                 start: "top top",
    //                 end: "bottom -150%",
    //                 scrub: true,
    //                 scroller: "#main-container",
    //                 pin: true,
    //                 toggleActions: "play none none reverse"
    //             }
    //         })

    //     }, mainRef)

    //     return () => ctx.revert();

    // }, [])

    return (
        <>
            {/* <div style={{position: "relative", overflow: "hidden", height: "100vh"}} ref={mainRef}>
                <div className={styles.curtain} id="curtain"></div>
                <div className={styles.pageTransitionBlack} id="main">
                    <Navbar />
                    <Header headerText={"My Skills"}/>
                </div>
            </div>   */}
            <LogoLeft icon={<FaReact />} description={"Built all of my personal/fun projects using React and have the most experience with it."} color={"#61DBFB"}/>
            <LogoRight icon={<FaAngular />} description={"Built multiple functional sites with both Front-End and Back-End."} color={"#dd1b16"}/>
            <LogoLeft icon={<SiExpress />} description={"Built multiple Back-Ends implementing it with Node.js"} color={"#3C873A"}/>
            <LogoRight icon={<FaNodeJs />} description={"Connected my Node.js Back-Ends with Reat Front-Ends in multiple personal projects."} color={"#68a063"}/>
            <LogoLeft icon={<SiFirebase />} description={"My personal favourite, used it in a plethora of big personal projects."} color={"#FFA611"}/>
            <LogoRight icon={<SiMongodb />} description={"Enjoyed using a non SQL database for my personal projects."} color={"#4DB33D"}/>
            <LogoLeft icon={<FaBootstrap />} description={"Used it to fasten my work and build modern looking UIs."} color={"#563d7c"}/>
            <LogoRight icon={<SiRedux />} description={"Used it to update and maitain data across my React application."} color={"#764abc"}/>
            <LogoLeft icon={<SiTailwindcss />} description={"Tried out Tailwind CSS for my components in React."} color={"#3490dc"}/>
        </>
    );
}

export default Skills;