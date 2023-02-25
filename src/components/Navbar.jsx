import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {

    const navbarRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
            .fromTo("#navLink", {duration: 2, opacity: 0}, {opacity: 1})
        }, navbarRef)
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