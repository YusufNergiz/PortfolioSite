import gsap from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {

    const navbarRef = useRef();

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

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