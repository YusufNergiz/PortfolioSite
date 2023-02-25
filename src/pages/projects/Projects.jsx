import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import gsap, { Power4 } from "gsap";
import { useRef } from "react";
import useLocoScroll from "../../hooks/useLocoScroll";
import GithubStats from "./GithubStats";

const Projects = () => {

    useLocoScroll();

    const mainRef = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.from("#curtain", {
                y: 0,
                duration: 5,
                stagger: 3,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "center center",
                    end: "+=50%",
                    scroller: "#main-container",
                    scrub: true
                }
            })

            gsap.from("#header", {
                opacity: 1,
                duration: 5,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "center center",
                    end: "+=50%",
                    scroller: "#main-container",
                    scrub: true
                }
            })

        }, mainRef)   

        return () => ctx.revert();

    }, [])


    return (
        <>
            <div>
                <div className="position-realtive vh-100 w-100" ref={mainRef}>
                    <div id="header" style={{opacity: 0, height: "100vh"}}>
                        <Navbar />
                        <Header headerText={"My projects"}/>
                    </div>
                    <div className="d-flex" style={{background: "#212121"}}>
                        <div className={styles.curtain} id="curtain"></div>
                        <div className={styles.curtain} id="curtain"></div>
                        <div className={styles.curtain} id="curtain"></div>
                        <div className={styles.curtain} id="curtain"></div>
                        <div className={styles.curtain} id="curtain"></div>
                    </div>
                </div>
            </div>
            <div style={{height: "30vh"}}></div>
            <GithubStats/>
        </>
    );
}

export default Projects;