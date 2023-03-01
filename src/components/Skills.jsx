import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";

const Skills = () => {

    const skillsContainerRef = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            let mm = gsap.matchMedia();

            mm.add("(min-width: 1000px)", () => {
                gsap.timeline()
                .from("#skillImage", {
                    width: 20,
                    duration: 5,
                    ease: Power4.ease,
                    scrollTrigger: {
                        trigger: skillsContainerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        scroller: "#main-container",
                        pin: true
                    }
                })
                .from("#skillImageText", {
                    opacity: 0,
                    x: "100%",
                    duration: 3,
                    ease: Power4.ease,
                    stagger: .2,
                    scrollTrigger: {
                        trigger: skillsContainerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        scroller: "#main-container"
                    }
                }, 5)
                .from("#skillList", {
                    opacity: 0,
                    y: "100%",
                    duration: 3,
                    ease: Power4.ease,
                    scrollTrigger: {
                        trigger: skillsContainerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        scroller: "#main-container",
                    }
                }, 10)
                .from("#skillList li", {
                    opacity: 0,
                    y: "100%",
                    duration: 3,
                    stagger: 0.060,
                    ease: Power4.ease,
                    scrollTrigger: {
                        trigger: skillsContainerRef.current,
                        start: "top top",
                        bottom: "bottom bottom",
                        scrub: true,
                        scroller: "#main-container",
                    }
                }, 13)
            })

        }, skillsContainerRef)
        return () => {
            ctx.revert()
        };
    }, [])

    return (
        <>
            <div className={styles.container} style={{height: "150vh"}}>
                <div className={`${styles.skillsContainer}`} ref={skillsContainerRef}>
                    <div className={`${styles.skillImage}`} id="skillImage">
                        <h1 id="skillImageText">Some of</h1>
                        <h1 id="skillImageText">my Skills</h1>
                    </div>
                    <div className={`${styles.skillsList} row`} id="skillList">
                        <div className="col-12 col-md-4">
                            <h3>LANGUAGES</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla Javascript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C#</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6">
                            <h3>FRAMEWORKS/LIBRARIES/OTHERS</h3>
                            <div className="row">
                                <ul className="col-6">
                                    <li>React.js</li>
                                    <li>Angular</li>
                                    <li>Node.js</li>
                                    <li>GSAP</li>
                                    <li>Express.js</li>
                                    <li>Redux</li>
                                </ul>
                                <ul className="col-6">
                                    <li>Tailwind CSS</li>
                                    <li>Mongo DB</li>
                                    <li>Firebase</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Skills;