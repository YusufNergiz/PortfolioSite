import { gsap, ScrollTrigger, Power4 } from "gsap/all";
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import styles from "./styles.module.css";

import pythonCert from "../../images/pythonCert.jpg";
import gitCert from "../../images/gitCert.png";
import hackYeahCert from "../../images/hackCert.jpg";
import nodeCert from "../../images/nodeCert.png";
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import MouseBlob from "../../components/MouseBlob";

function Certificates() {

    // useLocoScroll();

    const mainRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
    };

    const certList = [
        pythonCert, gitCert, hackYeahCert, nodeCert
    ]

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from("#header", {
                opacity: 1,
                duration: 5,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "center center",
                    end: "+=50%",
                    // scroller: "#main-container",
                    scrub: true,
                }
            })

            gsap.from("#curtain", {
                duration: 10,
                x: "100vw",
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top top",
                    end: "+=50%",
                    scrub: true,
                    // scroller: "#main-container",
                    toggleActions: "play none none reverse",
                }
            })

        }, mainRef)

        return () => {
            ctx.revert()
            ScrollTrigger.killAll()
        };

    }, [])

  return (
    <>
        <div style={{overflow: "hidden"}}>
            <MouseBlob />
            <div className={styles.certContainer} ref={mainRef}>
                <div className="position-realtive vh-100 w-100">
                    <div className={styles.curtain} id="curtain"></div>
                    <div id="header" style={{opacity: 0, height: "100vh"}}>
                        <Navbar />
                        <Header headerText={"My certificates"}/>
                    </div>
                </div>
                <div style={{width: "100%", height: "100vh", background: "#212121", overflow: "hidden"}}>
                    <div>
                        <Slider { ...settings }>
                            {certList.map((cert, index) => (
                                <div className='d-flex justify-content-center align-items-center' style={{background: "#212121"}} key={index}>
                                    <img src={cert} alt="Certificate"/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Certificates