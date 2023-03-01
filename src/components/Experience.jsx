import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Experience = () => {

    const experienceContainerRef = useRef();
    
    const experiences = [
        {
            header: "LLC InnLab",
            title: "Inn-Lab",
            description: "Developed the user interfaces and back-ends of multiple websites by utilizing the UI/UX designer's given designs",
            date: "Aug 2022 - Oct 2022",
            points: ["Front-End Angular Developer Intern", "Almaty, Kazakhstan", "https://innlab.kz/page"]
        },
        {
            header: "GDSC",
            title: "Google Developers Student Club",
            description: "As a speaker for the Google Developers Student Club, I had the privilege of sharing my knowledge and insights on various topics related to the world of technology and development. Through presentations, workshops, and discussions,",
            date: "Nov 2022 - Present",
            points: ["Speaker", "Warsaw, Poland", "https://heylink.me/gdscvistula/"]
        }
    ]


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const tl = gsap.timeline()
            .from("#experienceInfo", {
              yPercent: 100,
              duration: 1,
              opacity: 0,
              ease: Power4.ease,
              stagger: {
                each: 5,
                onComplete: function() {
                    gsap.to("#experienceInfo", {
                        opacity: 0,
                        duration: 1
                    })
                }
              },
              scrollTrigger: {
                trigger: experienceContainerRef.current,
                pin: true,
                start: "top top",
                end: "bottom+=300 center",
                scrub: true,
                scroller: "#main-container",
                toggleActions: "play none none reverse",
              }
            })
            
        }, experienceContainerRef);
      
        return () => ctx.revert();
      }, []);
    
    return (
        <>
            <div className={`${styles.container}`} ref={experienceContainerRef}>
                <div className="row h-100 w-100 d-flex align-items-center justify-content-center">
                    <div className={`col-12 col-md-6 d-flex align-items-center justify-content-center flex-column ${styles.experienceCompany}`}>
                        <h1 id="experienceHeader">Experiences</h1>
                    </div>
                    <div className={`col-12 col-md-6 col-12 col-md-6 d-flex align-items-center justify-content-center flex-column position-relative`} style={{height: "60%", }}>
                        {experiences.map((experience, index) => (
                            <div className={styles.experienceInfo} id={`experienceInfo`} key={index}>
                                <h3>{experience.title}</h3>
                                <p>{experience.description}</p>
                                <h6>{experience.date}</h6>
                                <ul>
                                    {experience.points.map((item, index) => (
                                        <li className={styles.experienceListItem} key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;