import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";

const About = () => {

    const videoRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to("#videoContainer", {
                defaults: { duration: 1 },
                scrollTrigger: {
                    markers: true
                }
            })
        }, videoRef)
    }, [])


    return (
        <>
            <div className={styles.intro} ref={videoRef} id="videoContainer">
                <h1>About Me</h1>
                <video width="100%" height="100%" id="myVideo">
                    <source src="video\video.mp4" type="video/mp4"/>
                </video>
            </div>
            <section>
                <h1>Some of my Skills..</h1>
            </section>
        </>
    );
}

export default About;