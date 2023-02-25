import gsap, { Power4 } from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./styles.module.css";

const LogoLeft = ({icon, description, color}) => {

    const mainRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from("#icon", {
                duration: 3,
                xPercent: 100,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    stagger: 1,
                    scroller: "#main-container",
                    markers: true
                }
            })
        }, mainRef)

        return () => ctx.revert();

    }, [])

    return (
        <div className={`row ${styles.skillContainer}`} ref={mainRef}>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
                <h1 style={{color: color}} id="icon">{icon}</h1>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <h5>{description}</h5>
            </div>
        </div>
    );
}

export default LogoLeft;