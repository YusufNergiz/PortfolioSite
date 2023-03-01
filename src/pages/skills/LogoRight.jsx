import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const LogoRight = ({icon, description, color}) => {

    const mainRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("#icon", {
                duration: 3,
                xPercent: 300,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                    scroller: "#main-container",
                }
            })
        }, mainRef)  

        return () => ctx.revert();

    }, [])

    return (
        <div className={`row ${styles.skillContainer}`} ref={mainRef}>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <h5 id="text">{description}</h5>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <h1 style={{color: color}} id="icon">{icon}</h1>
            </div>
        </div>
    );
}

export default LogoRight;