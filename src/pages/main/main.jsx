import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styles from "./styles.module.css";
import { gsap, Power4 } from "gsap";
import { useNavigate } from "react-router-dom";

import {FaCube} from "react-icons/fa";

const Main = () => {

    const navigate = useNavigate();

    const wrapperRef = useRef(null);
    const squirrelRef = useRef(null);
    const eyeLeft = useRef();
    const eyeRight = useRef();
    const mainRef = useRef();
    const shapeRef = useRef();

    const loadingPageRef = useRef();
    const pageTransitionBlackRef = useRef();
    const pageTransitionRedRef = useRef();
    const pageTransitionLogoRef = useRef();

    const [conf, setConf] = useState(1);
    const [rnd, setRnd] = useState(1);
    const [count, setCount] = useState(0);
    const [mouseCoordinates, setMouseCoordinates] = useState({
        x: 0,
        y: 0
    })

    // PageTransitionText
    const [pageTransitionText, setPageTransitionText] = useState("Hi, Im Yussuf ✌");

    const randomShapeSelector = () => {

        // Function to get a random number
        const rand = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Function to avoid getting the same configuration over and over again
        const uniqueRand = (min, max, prev) => {
            let next = prev;

            while (prev === next) {
                next = rand(min, max);
            }
            return next
        }

        // All the position of shapes with the correct roundnesses
        const combinations = [
            { configuration: 1, roundness: 1 },
            { configuration: 1, roundness: 2 },
            { configuration: 1, roundness: 4 },
            { configuration: 2, roundness: 2 },
            { configuration: 2, roundness: 3 },
            { configuration: 3, roundness: 3 }
        ];

        let prev = 0;

        setTimeout(() => {
            setCount(count + 1);
            const index = uniqueRand(0, combinations.length - 1, prev)
            
            setConf(combinations[index].configuration)
            setRnd(combinations[index].roundness)

            prev = index;
        }, 3000);
    }

    useEffect(() => {
        randomShapeSelector();
    }, [count])

    // Gsap Animations

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
            .fromTo("#pageTransitionCream", {duration: 2.2, scaleX: 0}, {scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
            .fromTo("#pageTransitionWhite", {duration: 2.2, scaleX: 0}, {scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut}, .2)
            .fromTo("#pageTransitionLogo", {duration: 1.6, xPercent: -100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut}, .7)
            .to("#pageTransitionCream", {duration: 2.2, scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut})
            .to("#pageTransitionLogo", {duration: .2, autoAlpha: 0}, '-=1.2')
            .fromTo(".wrapper", {duration: 1, opacity: 0, y: 100}, {opacity: 1, y: 0, ease: Power4.easeInOut})
            .fromTo("#squirrel", {duration: 1, opacity: 0, y: -100}, {opacity: 1, y: 0, ease: Power4.easeInOut})
        }, loadingPageRef)

    }, [])

    //


    const calcAngle = (element) => {
        if (!element.current) {
            return;
        }

        let elX = element.current.offsetLeft + element.current.clientWidth / 2;
        let elY = element.current.offsetTop + element.current.clientHeight / 2;

        let rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        let rot = rad * (180 / Math.PI);
        return rot;
    }

    const handleMouseMove = (e) => {
        setMouseCoordinates({x: e.clientX, y: e.clientY});
    }

    const navigateToPage = (url, transitionText) => {
        const ctx = gsap.context(() => {
            setPageTransitionText(transitionText)
            gsap.timeline()
            .fromTo("#pageTransitionCream", {duration: 2.2, scaleX: 0}, {scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
            .fromTo("#pageTransitionWhite", {duration: 2.2, scaleX: 0}, {scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut}, .2)
            .fromTo("#pageTransitionLogo", {duration: 1.6, xPercent: -100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut}, .7)
            .fromTo("#transitionText", {duration: 1.4, opacity: 1}, {opacity: 0})
            .add(gsap.fromTo(".wrapper", {duration: 1, opacity: 1, x: 0}, {opacity: 0, x: 100, ease: Power4.easeInOut}), 0)
            .add(gsap.fromTo("#squirrel", {duration: 1, opacity: 1, y: 0}, {opacity: 0, y: -100, ease: Power4.easeInOut}), 0)
            .add(() => navigate(url))
        }, loadingPageRef);
    }
    

    return (
        <div ref={loadingPageRef} onMouseMove={handleMouseMove}>
            <div className={styles.pageTransitionCream} ref={pageTransitionRedRef} id="pageTransitionCream"></div>
            <div className={styles.pageTransitionWhite} ref={pageTransitionBlackRef} id="pageTransitionWhite"></div>
            <div className={styles.pageTransitionLogo} ref={pageTransitionLogoRef} id="pageTransitionLogo"><h1 id="transitionText">{pageTransitionText}</h1></div>
            <div className={`${styles.mainPageContainer}`} ref={mainRef} id="mainRef">
                <div className={styles.squirrelCage}>
                    <div className={styles.squirrel} ref={squirrelRef} id="squirrel">
                        <div className={styles.eyes}>
                            <div className={styles.eye} ref={eyeLeft} style={{transform: `rotate(${calcAngle(eyeLeft)}deg)`}}></div>
                            <div className={styles.eye} ref={eyeRight} style={{transform: `rotate(${calcAngle(eyeRight)}deg)`}}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.colorLinks}>
                    <h3 style={{color: "#1f1f1f"}}><FaCube /> Projects</h3>
                    <h3 style={{color: "#5c5b5a"}}><FaCube /> Skills</h3>
                    <h3 style={{color: "#f7f7f7"}}><FaCube /> Resume</h3>
                    <h3 style={{color: "#919191"}}><FaCube /> Certificates</h3>
                    <h3 style={{color: "#898989"}}><FaCube /> About</h3>
                </div>
                <div id={styles.wrapper} className="col-12 col-lg-6 wrapper" ref={wrapperRef} data-configuration={conf} data-roundness={rnd}>
                    <div className={styles.shape} onClick={() => navigateToPage("/skills", "My Skills...")}><h1>Skills</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/resume", "My CV...")}><h1>Resume</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/about", "About Me...")} ref={shapeRef}><h1>About Me</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/projects", "My Projects...")}><h1>Projects</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/skills", "My Skills...")}><h1>Skills</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/certificates", "My Certificates...")}><h1>Certificates</h1></div>
                    <div className={styles.shape} onClick={() => navigateToPage("/projects", "My Projects...")}><h1>Projects</h1></div>
                </div>
                <a href="https://linkedin.com/in/yussuf-nergiz" target="_blank" className={styles.author} rel="noreferrer">Yussuf Nergiz</a>
            </div>
        </div>
    );

}

export default Main;