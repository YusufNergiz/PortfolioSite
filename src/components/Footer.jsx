import gsap, { Power4 } from "gsap";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import styles from "./styles.module.css";

const Footer = () => {

    const footerRef = useRef();


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("#footerCurtain", {
                y: 0,
                duration: 5,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scroller: "#main-container",
                    scrub: true,
                }
            })
        }, footerRef)

        return () => ctx.revert();

    }, [])


    // Navigation

    return (
        <>
           <div style={{position: "relative", overflow: "hidden"}} ref={footerRef}>
                <section className={`row border border-3 ${styles.footerContainer}`}>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <a href="/"><h1>Main</h1></a>
                            <a href="/projects"><h1>Projects</h1></a>
                            <a href="/skills"><h1>Skills</h1></a>
                            <a href="/resume"><h1>Resume</h1></a>
                            <div className="d-flex gap-3">
                                <a href="https://www.linkedin.com/in/yussuf-nergiz" target="_blank"><h3>Linkedin</h3></a>
                                <a href="https://github.com/YusufNergiz" target="_blank"><h3>Github</h3></a>
                                <a href="mailto:yusufyn04@gmail.com"><h3>Email</h3></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6"><ContactForm /></div>
                </section>
                <div className={styles.footerCurtain} id="footerCurtain"></div>
           </div>
        </>
    );
}

export default Footer;