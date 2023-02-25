import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "../utils/Split3.min.js"
gsap.registerPlugin(ScrollTrigger);


const AboutMeText = () => {  

    const containerRef = useRef();
    
    useEffect(() => {

        const myText = new SplitText("#aboutMeText", {type: 'lines', linesClass: 'lineChildren'})

        const ctx = gsap.context(() => {
            gsap.from(myText.lines, {
                y: 0,
                opacity: 0,
                stagger: 0.1,
                duration: .1,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "+=100",
                    toggleActions: "play none none reverse",
                    scroller: "#main-container" 
                }
            })   
        }, containerRef)
    }, [])


    return (
        <div className={styles.container} style={{paddingInline: "2rem"}} ref={containerRef}>
            <p className={styles.mobileAboutMeText} id="aboutMeText">I'm an experienced web developer specializing in creating visually appealing websites with excellent user experiences. I'm proficient in React, Angular, Node.js, Express, and Firebase, as well as CSS frameworks like Tailwind and Bootstrap. I'm committed to producing top-quality web applications and staying up-to-date with the latest web development technologies.</p>
            <p className={styles.aboutMeText} id="aboutMeText">I'm a skilled web developer with expertise in React, Angular, Node.js, Express, and Firebase. I specialize in creating visually appealing, dynamic websites with exceptional user experiences. I have a strong proficiency in CSS frameworks such as Tailwind and Bootstrap, enabling me to create beautiful, responsive designs that adapt to any device. I stay up-to-date with the latest web development technologies and continually improve my skills to provide innovative solutions. I'm committed to producing clean, well-structured code and delivering top-quality web applications.</p>
        </div>
    );
}

export default AboutMeText;