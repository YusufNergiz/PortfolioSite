import React from "react";
import styles from "./styles.module.css";
import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import SplitType from "split-type";
import AboutMeText from "../../components/AboutMeText";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import useLocoScroll from "../../hooks/useLocoScroll";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tv from "./Tv";

const About = () => {

        useLocoScroll();

        const mainRef = useRef();

        // Gsap Load Animations\

        useEffect(() => {

            gsap.registerPlugin(ScrollTrigger);

            const myText = new SplitType("#textBox")
            
            const ctx = gsap.context(() => {
                gsap.fromTo('#curtainTop', {
                    y: "-50vh"
                    }, {
                        y: "50vh",
                        ease: 'none',
                        scrollTrigger: {
                        trigger : '#main',
                        start: 0,
                        end: '+=50%',
                        scrub: true,
                        scroller: "#main-container",
                        lazy: false 
                    }
                })
    
                gsap.to('#curtainBottom', {
                    y: "50vh"
                },
                {
                    y: 0,
                    ease: 'none',
                    scrollTrigger: {
                    trigger : '#main',
                    start: 0,
                    end: '+=50%',
                    scrub: true,
                    scroller: "#main-container",
                    lazy: false  
                    }
                })
    
                gsap.to('#main', {
                    opacity: 0,
                    zIndex: -1,
                    ease: 'none',
                    scrollTrigger: {
                    trigger : '#main',
                    start: 0,
                    end: '+=50%',
                    scrub: true,
                    scroller: "#main-container",
                    lazy: false  
                }
                })
            })
            return () => ctx.revert();
        })


        return (
            <>
                <div style={{position: "relative", overflow: "hidden"}}>
                    <div className={styles.curtainTop} id="curtainTop"></div>
                    <div className={styles.curtainBottom} id="curtainBottom"></div> 
                    <div className={styles.pageTransitionBlack} ref={mainRef} id="main">
                        <Navbar />
                        <Header headerText={"About Me"}/>
                    </div>
                </div>
                <AboutMeText />
                <div style={{height: "100vh", width: "100%", position: "relative", background: "#212121"}}>
                    <h1 className={styles.tvHeader}>Check out some of my Projects</h1>
                    <Tv />
                </div>
                <Skills />
                <Experience />
                <Footer />
            </>
        );
    }

    export default About;