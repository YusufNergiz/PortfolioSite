import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";
import Slider from "react-slick";

const Skills = () => {

    const skillsContainerRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        
      };

    const frameworks = [
        "React.js",
        "Angular",
        "Node.js",
        "GSAP",
        "Express.js",
        "Redux",
        "Tailwind CSS",
        "Mongo DB",
        "Firebase",
        "Bootstrap"
    ]

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
                        // scroller: "#main-container",
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
                        // scroller: "#main-container"
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
                        // scroller: "#main-container",
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
                        // scroller: "#main-container",
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
                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <h3>LANGUAGES</h3>
                            <div className={styles.slider}>
                                <Slider {...settings}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>HTML</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>CSS</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>Vanilla Javascript</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>Python</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>Java</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3>C#</h3>
                                </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <h3>FRAMEWORKS/LIBRARIES/OTHERS</h3>
                            <div className={styles.slider}>
                                <Slider {...settings}>
                                {frameworks.map((framework, index) => (
                                    <div className="d-flex justify-content-center align-items-center" key={index}>
                                        <h3>{framework}</h3>
                                    </div>
                                ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Skills;