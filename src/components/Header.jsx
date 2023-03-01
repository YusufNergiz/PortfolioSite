import gsap from "gsap";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import SplitText from "../utils/Split3.min.js";

const Header = ({headerText}) => {

    useEffect(() => {
        const header = new SplitText("#headerText", {type: "lines", linesClass: "lineText"})

        new SplitText("#headerText", {type: "lines", linesClass: "lineTextParent"})

        gsap.to(header.lines, {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2",
        })
    }, [])

    return (
        <section className={styles.headerContainer}>
            <ul className={styles.headerMenu}>
                <li><a href="/about">About</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
            <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%"}}>
                <h1 id="headerText" style={{color: "#212121"}}>{headerText}</h1>
            </div>
        </section>
    );
}

export default Header;