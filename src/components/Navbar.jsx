import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Navbar = () => {

    const navbarRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
            .fromTo("#navLink", {duration: 2, opacity: 0}, {opacity: 1})
        }, navbarRef)

        return () => {
            ctx.revert()
        };

    }, [])

    return (
        <div className={styles.navbar} ref={navbarRef}>
            <div>
                <div className={styles.navbarLink}><a href="/"style={{textDecoration: "none", color: "#464646"}} id="navLink">main</a></div>
            </div>
            <div><div id="navLink">Yussuf Nergiz</div></div>
            <div><div id="navLink">Software Developer</div></div>
        </div>
    );
}

export default Navbar;